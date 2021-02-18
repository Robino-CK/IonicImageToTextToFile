import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }
  createTable(name: string) {
    var sqlite = new SQLite();
    return sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {

        console.log(`Created Table: ${name} `)
        return db.executeSql(`CREATE TABLE ${name} (name TEXT)`, [])




      })
      .catch(e => {
        console.log(`error on Creating Table in ${name} with Err: ${e.message}`)
        return `error on Creating Table in ${name} with Err: ${e.message}` ;
        

      });
  }

  insertEntry(tableName: string, value: string) {
    var sqlite2 = new SQLite();

    return sqlite2.create({
      name: 'data.db',
      location: 'default'

    }).then((db: SQLiteObject) => {
      console.log(`Inserten in Table: ${tableName} `)
      return db.executeSql(`INSERT INTO ${tableName} (name) VALUES ("${value}")`, [])


    })
      .catch(e => {
        console.log(`error on Inserting  in ${tableName} with Err: ${e.message}`)
        return `error on Inserting  in ${tableName} with Err: ${e.message}` ;
      });
  }


  getAllEntriesOfTable(tableName: string) {
    var sqlite2 = new SQLite();

    return sqlite2.create({
      name: 'data.db',
      location: 'default'

    }).then((db: SQLiteObject) => {
      return db.executeSql(`SELECT * FROM ${tableName} `, [])

    })
      .catch(e => {
        console.log(`error on Inserting  in ${tableName} with Err: ${e.message}`)
        return `error on Inserting  in ${tableName} with Err: ${e.message}` ;
      });
  }


}
