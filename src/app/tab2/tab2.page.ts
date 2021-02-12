import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import * as Tesseract from 'tesseract.js'
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, 
  CameraPhoto, CameraSource } from '@capacitor/core';
import { AnyARecord } from 'dns';
import validator from 'validator';
var pic;
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private imageSrc: string = '';
  
  constructor(public photoService: PhotoService) {
    
  }
 async addPhotoToGallery() { 
    let p =await this.photoService.addNewToGallery();
    this.recognizeImage(p);
  
    
    
  }

  
  recognizeImage(pic: string) {
  
   
    Tesseract.recognize(pic)
    
    .catch(err =>   console.error(err + "2"))
    .then(result => {
      var t = result.text;
      console.log("3")
      localStorage.setItem("text", t);
    //  this.imageText = result.text;
    })
    .finally(resultOrError => {
      console.log("4")
  //    this.progress.complete();
    })

}
}
