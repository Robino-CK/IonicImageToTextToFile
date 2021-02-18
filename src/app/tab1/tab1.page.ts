import { Component, VERSION  } from "@angular/core";

import { DeviceDetectorService } from "ngx-device-detector";
import { Tab1BothService } from "../UIControllerBoth/tab1-both.service";


import { Tap1DesktopService } from "../UIControllerDesktop/tap1-desktop.service";
import { Tap1MobileService } from "../UIControllerMobile/tap1-mobile.service";
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


 export  class Tab1Page {
  public text ;
  currentImage: any;
  

  constructor(private deviceService: DeviceDetectorService
   , private tab1ServiceDesktop: Tap1DesktopService, private tab1ServiceMobile: Tap1MobileService, private tab1BothService: Tab1BothService) { }

      async takePicture() {
        
        if(this.deviceService.isMobile()) {
          this.tab1ServiceMobile.takePicture().then(text => {
            this.text = text;
          });
        
        } else {
           this.tab1ServiceDesktop.takePicture().then(text => {
             this.text = text;
           });
        }

      }
      async takeImage (e:any) {
          this.text = await this.tab1BothService.takeImage(e)
          
        }
        saveData () {

        }
      

      

}
