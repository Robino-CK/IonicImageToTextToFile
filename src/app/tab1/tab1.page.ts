import { Component, VERSION  } from "@angular/core";

import { DeviceDetectorService } from "ngx-device-detector";


import { Tap1DesktopService } from "../UIControllerDesktop/tap1-desktop.service";
import { Tap1MobileService } from "../UIControllerMobile/tap1-mobile.service";
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


 export  class Tab1Page {
  public text ;
  currentImage: any;
  

  constructor(private deviceService: DeviceDetectorService
   , private tab1ServiceDesktop: Tap1DesktopService, private tab1ServiceMobile: Tap1MobileService) { }

      async takePicture() {
        
        if(this.deviceService.isMobile()) {
          this.tab1ServiceMobile.takePicture().then(text => {
            this.text = text;
          });
        
        } else {
           this.tab1ServiceDesktop.takePicture().then(text => {
             this.text = text;
           });
        }

      }
      takeImage (e:any) {
      
    
          var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
          var pattern = /image-*/;
          var reader = new FileReader();
          if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
          }
          reader.onload = this.imageToBase64.bind(this);
          reader.readAsDataURL(file);


          
          
        }
        private imageToBase64(e:any) {
          let reader = e.target;
          
          
          
          if(this.deviceService.isMobile()) {
            this.text = this.tab1ServiceMobile.convertPicInText(reader.result.split(",")[1])
            .then(text => {
              this.text = text;
            })
            .catch((err: any) => {
              this.text = "error On OCR" + err;
            });
          } else {
            this.text = this.tab1ServiceDesktop.textFromImage(reader.result)
            .then(text => {
              this.text = text;
            })
            .catch((err: any) => {
              this.text = "error On OCR" + err;
            });
          }
          
        
        
          
         
        }
      

      

}
