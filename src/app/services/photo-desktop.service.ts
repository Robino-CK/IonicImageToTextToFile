import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, 
  CameraPhoto, CameraSource } from '@capacitor/core';

  const { Camera, Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PhotoDesktopService {
  public photos: Photo[] = [];
  public photo: String;
  public imgBase64: String;
  constructor() { }

 


  public async takePhotoDesktop() {
    // Take a photo
    var x = "2";
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, 
      source: CameraSource.Camera, 
      quality: 100 
    }
     
    );

    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath
    });
   
    return await  this.readAsBase64(capturedPhoto);
  
  }
  private async readAsBase64(cameraPhoto: CameraPhoto) {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(cameraPhoto.webPath!);
    const blob = await response.blob();
  
    return await this.convertBlobToBase64(blob) as string;  
  }
  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
  
  

}
export interface Photo {
  filepath: string;
  webviewPath: string;
}
