import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import * as Tesseract from 'tesseract.js'
import * as test from 'C:/Users/robin/OneDrive - rwth-aachen.de/Programms/ionic_kamera_app/photo-gallery/src/app/tab2/test.js'

import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, 
  CameraPhoto, CameraSource } from '@capacitor/core';
import { AnyARecord } from 'dns';
import validator from 'validator';
var pic;
//window.require('fs');
//const ocrad = require('async-ocrad');

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private imageSrc: string = '';
   recText: string;
  
  constructor(public photoService: PhotoService) {
    
  }
 async addPhotoToGallery() { 
    let p =await this.photoService.addNewToGallery();
    this.recognizeImage(p);
    //let w = await ocrad(p);
    let f = 2;
  // this.recText = await test.recognizeImage(p);
   // let t = 2;
  //  let w = ocrad.OCRAD(p);

    
    
  }

  
  recognizeImage(pic: string) {
  
    this.recText = "loading"
    Tesseract.recognize(pic)
    .catch(err =>  {
      console.error(err ) 
      this.recText = "err"
    } 
    )
    .then(result => {
      var t = result["data"].text;
      console.log("3")
      localStorage.setItem("text", t);
      this.recText = t;
    //  this.imageText = result.text;
    })
    .finally(resultOrError => {
      console.log("4")
  //    this.progress.complete();
    })

}
}
