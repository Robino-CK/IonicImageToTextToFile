import { Component } from '@angular/core';
import { DatabaseService } from '../services/database.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public text: string = '';
   recText: string;
  
  constructor(private databaseService: DatabaseService) {
    
  }

  showAllTextes() {
    
     this.databaseService.getAllEntriesOfTable("table_1").then((res) => {
      for (let i = 0; i < res.rows.length; i++) {
        let item = res.rows.item(i);
        // do something with it

        this.text = this.text + "\n" + item.name;
}

    })


  }
}
