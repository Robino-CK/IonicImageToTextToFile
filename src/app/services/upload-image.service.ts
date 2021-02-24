import { Injectable } from '@angular/core';
import { OcrService } from './ocr.service';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  constructor(private ocrService: OcrService) { }
    async uploadImage (e:any) {
     
      var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
      var pattern = /image-*/;
      var reader = new FileReader();
      if (!file.type.match(pattern)) {
        alert('invalid format');
        return 'invalid Iamge format';
      }
      let self = this
   
      reader.readAsDataURL(file);
      return new Promise<String>((resolve, reject) => {
        reader.onloadend =  function () {
          resolve( reader.result.toString());
      }
      })
      
  
      

    

    }
   
  }

