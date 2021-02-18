import { Component, OnInit } from "@angular/core";
import * as Tesseract from 'tesseract.js'


import { PhotoDesktopService } from "../services/photo-desktop.service";
import { PhotoService } from "../services/photo.service";
import { OCR, OCRSourceType, OCRResult } from '@ionic-native/ocr/ngx';
const mobile = false;


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {
  public text;
  currentImage: any;

  constructor(public photoService: PhotoService, public photoDesktopService: PhotoDesktopService) { }

  async takePicture() {
    let pic;
    if (mobile) {
      this.photoService.takePicture().then((imageData) => {
        var ocr = new OCR();
        ocr.recText(OCRSourceType.BASE64,imageData)
         .then((res: OCRResult) => {
          console.log(JSON.stringify(res));
          this.text = JSON.stringify(res);
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
      //split(",")[1]
      pic = await this.photoDesktopService.takePhotoDesktop();
      
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
