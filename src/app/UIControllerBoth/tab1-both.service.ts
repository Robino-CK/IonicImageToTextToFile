import { Injectable } from '@angular/core';
import { Component, VERSION  } from "@angular/core";

import { DeviceDetectorService } from "ngx-device-detector";


import { Tap1DesktopService } from "../UIControllerDesktop/tap1-desktop.service";
import { Tap1MobileService } from "../UIControllerMobile/tap1-mobile.service";

@Injectable({
  providedIn: 'root'
})
export class Tab1BothService {
  ocrText:any;
  constructor(private tab1ServiceDesktop: Tap1DesktopService, private tab1ServiceMobile: Tap1MobileService, private deviceService: DeviceDetectorService) { }
   async takeImage (e:any) {
      
    
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    let self = this
    /* reader.onloadend =  function () {
        self.imageToOCR(reader).then(text =>{
          return text;
      }) 
    }*/
    
    /*reader.onload = (function (file) { // here we save variable 'file' in closure
     return function (e) { // return handler function for 'onload' event
         var data = this.result; // do some thing with data
     }
    })(file);
      */
  
    reader.readAsDataURL(file);
    return new Promise<String>((resolve, reject) => {
      reader.onloadend =  function () {
        self.imageToOCR(reader).then(text =>{
          resolve(text);
      }) 
    }
    })
    

    
  }
  public imageToOCR(e:any) {
    let reader =e //e.target;
    let text;
    
    
    if(this.deviceService.isMobile()) {
       return this.tab1ServiceMobile.convertPicInText(reader.result.split(",")[1]).then(text => {
        return text
      })
      
    } else {
      return  this.tab1ServiceDesktop.textFromImage(reader.result).then(text => {
        return text
      })
      
    }
  
   
  }
}
