import {Component, OnInit} from '@angular/core';
import {DataProviderService} from './data-provider.service';
import {Entry} from './models/entry.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private dataProvider: DataProviderService) {
  }

  ngOnInit() {
    this.dataProvider.getData().subscribe((data: Entry[]) => {
      this.dataProvider.entries = data;
      this.dataProvider.findLastEntryID(data);
      this.dataProvider.subject.next(data);
    });
  }

  title = 'app';
}
