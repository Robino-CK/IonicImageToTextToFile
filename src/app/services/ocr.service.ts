import { Injectable } from '@angular/core';
import { OCR, OCRSourceType, OCRResult } from '@ionic-native/ocr/ngx';

@Injectable({
  providedIn: 'root'
})
export class OcrService {

  constructor() { }
  public convertPicInText(imageData: string) {
    //Create Mobile OCR Object:
    var ocr = new OCR();
    
    return ocr.recText(OCRSourceType.BASE64, imageData)
      .then((ocrResult: OCRResult) => {
        
        //set Text:
        if (!ocrResult.foundText) {
          return "no Text found"
        } else {
          
          return ocrResult.blocks.blocktext
        }
         
      })
      .catch((error: any) => {
        return "OCR PROBLEM:" + error;


      });
  }
}
