import { Component, VERSION  } from "@angular/core";
import * as Tesseract from 'tesseract.js'

import { DeviceDetectorService } from "ngx-device-detector";
import { PhotoDesktopService } from "../services/photo-desktop.service";
import { PhotoService } from "../services/photo.service";
import { OCR, OCRSourceType, OCRResult } from '@ionic-native/ocr/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

import { Tap1DesktopService } from "../UIControllerDesktop/tap1-desktop.service";
import { Tap1MobileService } from "../UIControllerMobile/tap1-mobile.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


 export  class Tab1Page {
  public text;
  currentImage: any;

  constructor(private deviceService: DeviceDetectorService
   , private tab1ServiceDesktop: Tap1DesktopService, private tab1ServiceMobile: Tap1MobileService) { }

      async takePicture() {
        var imgPicker = new ImagePicker();
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



}
