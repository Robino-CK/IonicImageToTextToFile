import { Injectable } from '@angular/core';
import { PhotoService } from "../services/photo.service";
import { OCR, OCRSourceType, OCRResult } from '@ionic-native/ocr/ngx';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Tap1MobileService  {

   locations = new Observable((observer) => {
    let watchId: number;
  });
  
    public text;
    currentImage: any;
  
    constructor(public photoService: PhotoService ) { }
    

    private takePictureMobile() {
        //takingPic
        return this.photoService.takePicture().then((imageDataAsString64) => {
           return  this.convertPicInText(imageDataAsString64);
        }, (err) => {
            return "Camera issue" + err;
        });;
    }
  
    private convertPicInText(imageData: string) {
        //Create Mobile OCR Object:
        var ocr = new OCR();
       return ocr.recText(OCRSourceType.BASE64, imageData)
            .then((ocrResult: OCRResult) => {
                console.log(JSON.stringify(ocrResult));
                //set Text:
                return JSON.stringify(ocrResult);
            })
            .catch((error: any) => {
                return "OCR PROBLEM:" + error;
  
  
            });
    }
  
  
  
    public takePicture() {
        return this.takePictureMobile(); //-> is already doing OCR
    }
  
  
  
  }
  