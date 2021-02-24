import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Crop } from '@ionic-native/crop/ngx'; 
@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  currentImage: any;
  constructor(private camera: Camera) { }

   takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    return this.camera.getPicture(options)

  }

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

  private cropImage(fileUrl) {
    let crop = new Crop();
    const options: CameraOptions = {
      quality: 100,
    };
    
       
    crop.crop(fileUrl, options)
      .then(
        newPath => {
        //  this.showCroppedImage(newPath.split('?')[0])
        let w = newPath;
        },
        error => {
          alert('Error cropping image' + error);
        }
      );
  }


}