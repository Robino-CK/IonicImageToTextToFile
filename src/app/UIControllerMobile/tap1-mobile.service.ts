import { Injectable } from '@angular/core';
import { PhotoService } from "../services/photo.service";
import { OCR, OCRSourceType, OCRResult } from '@ionic-native/ocr/ngx';

//import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';

import { File } from '@ionic-native/file/ngx';
import { ActionSheetController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class Tap1MobileService {


  public text;
  

  constructor(public photoService: PhotoService) { }


  private takePictureMobile() {
    //takingPic
    return this.photoService.takePicture().then((imageDataAsString64) => {
      return this.convertPicInText(imageDataAsString64);
    }, (err) => {
      return "Camera issue" + err;
    });;
  }

  public convertPicInText(imageData: string) {
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



  public takeImage() {

/*

    const options: CameraOptions = {
      quality: 100,
     
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      
    }

    return this.imagePicker.getPictures(options)
    .then((results: any) => {
      for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
        //    return results[i];
      }
      return "done:" + results[0];
    })
    .catch ((err: any) =>{ return "Error getting Image:" + err });

}
}*/
}}
