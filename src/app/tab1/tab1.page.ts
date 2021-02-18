import { Component, VERSION  } from "@angular/core";
import * as Tesseract from 'tesseract.js'

import { DeviceDetectorService } from "ngx-device-detector";
import { PhotoDesktopService } from "../services/photo-desktop.service";
import { PhotoService } from "../services/photo.service";
import { OCR, OCRSourceType, OCRResult } from '@ionic-native/ocr/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {
  public text;
  currentImage: any;

  constructor(public photoService: PhotoService, public photoDesktopService: PhotoDesktopService,private deviceService: DeviceDetectorService) { }

  async takePicture() {
    let pic;
    //MOBILE:
    if (this.deviceService.isMobile()) {
      //takingPic
      this.photoService.takePicture().then((imageData) => {
        //Create Mobile OCR Object:
        var ocr = new OCR();
        ocr.recText(OCRSourceType.BASE64,imageData)
         .then((ocrResult: OCRResult) => {
          console.log(JSON.stringify(ocrResult));
          //set Text:
          this.text = JSON.stringify(ocrResult);
        })
          .catch((error: any) => {
            console.error(error);
     
  
          }); 
      }, (err) => {
        // Handle error
        console.log("Camera issue:" + err);
        this.text = "error2" + err;
      });;
      this.text = pic;
  
    } else {
      //DESKTOP
      //Much Cleaner and more Easy on Desk. -> Perhaps mobile could be like this.
      pic = await this.photoDesktopService.takePhotoDesktop();
      //Tesseract is actually damn slow.     
      Tesseract.recognize(pic)
        .catch(err => {
          console.error(err)
        }
        )
        .then(result => {
          console.log(result);
          this.text = result["data"].text;


        })


    }




  }



}
