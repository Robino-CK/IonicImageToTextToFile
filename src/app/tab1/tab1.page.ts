import { Component, VERSION } from "@angular/core";

import { DeviceDetectorService } from "ngx-device-detector";


import { DatabaseService } from "../services/database.service";
import { OcrService } from "../services/ocr.service";
import { PhotoService } from "../services/photo.service";
import { UploadImageService } from "../services/upload-image.service";
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {
  public text;
  currentImage: any;


  constructor(private uploadImageService: UploadImageService , private ocrService: OcrService
  , private databaseService: DatabaseService, private photoService: PhotoService) { }

  async takePicture() {

      this.photoService.takePicture().then(text => {
        
        this.ocrService.convertPicInText(text)
        .then (text => {
          this.text = text;
        })
      });

    
  }
  async uploadImage(e: any) {
    
    let res =  await this.uploadImageService.uploadImage(e);
    let that = this;
    
    
      that.ocrService.convertPicInText(res.split(",")[1])
      .then(text => {
        that.text = text
      })
    
 
    

  }
  saveData() {

     this.databaseService.createTable("table_1")
    .finally ( () => {
      this.databaseService.insertEntry("table_1", this.text)
      this.text = "saved."
      
    })


  }

}
