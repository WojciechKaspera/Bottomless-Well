import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Entry} from './models/entry.interface';
import {Subject} from 'rxjs/index';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class DataProviderService {
  subject = new Subject();
  lastEntryID: number;
  entryBeingModifiedID: number;

  constructor(private db: AngularFireDatabase, private router: Router) {
  }

  entries: Entry[];

  addData(data) {
    data.id = (this.lastEntryID + 1);
    this.db.list('entries').set(`${(this.lastEntryID + 1)}`, data);
    this.router.navigateByUrl('dashboard');
  }

  editData(data) {
    this.db.list('entries').set(`${this.entryBeingModifiedID}`, data);
  }

  removeEntry(entryID) {
    this.db.list('entries').remove(`${entryID}`);
  }

  findLastEntryID(data) {
    this.lastEntryID = data.reduce((a, b) => {
      return a.id > b.id ? a : b;
    }).id;
  }

  getData() {
    return this.db.list('entries').valueChanges();
  }

}
