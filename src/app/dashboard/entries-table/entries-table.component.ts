import {AfterContentInit, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';
import {Entry} from '../../models/entry.interface';
import {Router} from '@angular/router';
import {DataProviderService} from '../../data-provider.service';

@Component({
  selector: 'app-entries-table',
  templateUrl: './entries-table.component.html',
  styleUrls: ['./entries-table.component.scss']
})
export class EntriesTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;

  editEntry(entryID) {
    this.dataProvider.entryBeingModifiedID = entryID;
    this.router.navigateByUrl('modify/edit');
  }

  removeEntry(entryID) {
    this.dataProvider.removeEntry(entryID);
  }

  dataSource = new MatTableDataSource();
  columns = ['mileage', 'date', 'cost', 'type', 'actions'];



  constructor(private router: Router, private dataProvider: DataProviderService) {
  }

  addNew() {
    this.router.navigateByUrl('modify/add');
  }

  ngOnInit() {
    this.dataProvider.subject.subscribe((data: Entry[]) => {
      data.sort((a, b) => a.mileage - b.mileage);
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
