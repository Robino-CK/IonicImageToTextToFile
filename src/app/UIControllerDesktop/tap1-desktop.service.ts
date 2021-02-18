import { Injectable } from '@angular/core';
import * as Tesseract from 'tesseract.js'

import { PhotoDesktopService } from "../services/photo-desktop.service";

@Injectable({
  providedIn: 'root'
})
export class Tap1DesktopService {
  public text;
  currentImage: any;

  constructor( public photoDesktopService: PhotoDesktopService ) { }

  public async takePicture() {
    //DESKTOP
    //Much Cleaner and more Easy on Desk. -> Perhaps mobile could be like this.
    //Tesseract is actually damn slow.     
    let picture = await this.photoDesktopService.takePhotoDesktop();
     return  Tesseract.recognize(picture)
      .catch(err => {
        console.error(err)
      }
      )
      .then(result => {
        console.log(result);
          return result["data"].text;


      })
    }
  }

  