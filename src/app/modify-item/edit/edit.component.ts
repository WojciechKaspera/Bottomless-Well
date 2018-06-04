import {Component, OnInit, Output} from '@angular/core';
import {DataProviderService} from '../../data-provider.service';
import {Router} from '@angular/router';
import {Entry} from '../../models/entry.interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private dataProvider: DataProviderService, private router: Router) {
  }

  entryBeingModifiedID: number;
  @Output()
  entryBeingModified: Entry;

  ngOnInit() {
    if (!this.dataProvider.entryBeingModifiedID) {
      this.router.navigateByUrl('dashboard');
    }
    this.entryBeingModifiedID = this.dataProvider.entryBeingModifiedID;
    if (this.dataProvider.entries) {
      this.entryBeingModified = this.dataProvider.entries.filter((entry: Entry) => entry.id === this.entryBeingModifiedID)[0];
    }
  }

}
