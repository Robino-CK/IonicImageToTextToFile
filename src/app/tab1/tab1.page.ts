import { Component, VERSION } from "@angular/core";

import { DeviceDetectorService } from "ngx-device-detector";
import { Tab1BothService } from "../UIControllerBoth/tab1-both.service";


import { Tap1DesktopService } from "../UIControllerDesktop/tap1-desktop.service";
import { Tap1MobileService } from "../UIControllerMobile/tap1-mobile.service";

import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {
  public text;
  currentImage: any;


  constructor(private deviceService: DeviceDetectorService
    , private tab1ServiceDesktop: Tap1DesktopService, private tab1ServiceMobile: Tap1MobileService, private tab1BothService: Tab1BothService,
  ) { }

  async takePicture() {

    if (this.deviceService.isMobile()) {
      this.tab1ServiceMobile.takePicture().then(text => {
        this.text = text;
      });

    } else {
      this.tab1ServiceDesktop.takePicture().then(text => {
        this.text = text;
      });
    }

  }
  async takeImage(e: any) {
    this.text = await this.tab1BothService.takeImage(e)

  }
  saveData() {



    var sqlite = new SQLite();

    sqlite.create({
      name: 'data.db',
      location: 'default'

    })
      .then((db: SQLiteObject) => {


        db.executeSql('create table danceMoves(name VARCHAR(32))', [])
          .then(() => {

            console.log('Executed SQL')
            var sqlite2 = new SQLite();

            sqlite2.create({
              name: 'data.db',
              location: 'default'

            }).then((db: SQLiteObject) => {
              db.executeSql('INSERT INTO danceMoves (name) VALUES ("h")', [])
              .then(() => {
                console.log('Executed SQL: Insert')
              })
              .catch(e=> {
                console.log('err on Insert ' +e )
              })
            })
          })
          .catch(e => {
            console.log(e)

          });



      })
      .catch(e => console.log(e));


  }

}
