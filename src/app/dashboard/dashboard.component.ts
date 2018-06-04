import {Component, OnInit} from '@angular/core';
import {DataProviderService} from '../data-provider.service';
import {Entry} from '../models/entry.interface';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(private dataProvider: DataProviderService) {
  }

  entries: Entry[] = [];

  car = {
    type: 'Opel Astra H',
    cost: 13500,
    initialDistance: 143000
  };

  summarizedData = {
    totalGasolineConsumption: 0,
    totalGasolineCost: 0,
    totalCost: 0,
    totalDistance: 0
  };

  round(n, k) {
    const factor = Math.pow(10, k);
    return Math.round(n * factor) / factor;
  }

  // addData() {
  //   this.dataProvider.addData();
  // }

  ngOnInit() {
    this.dataProvider.getData().subscribe((data: Entry[]) => {
      this.dataProvider.entries = data;
      this.dataProvider.findLastEntryID(data);
      this.dataProvider.subject.next(data);
    });
    this.dataProvider.subject.subscribe((data: Entry[]) => {
      this.summarizedData.totalDistance = data.reduce((a, b) => {
        return a.mileage > b.mileage ? a : b;
      }).mileage;
      this.entries = data;
      this.summarizedData.totalCost = 0;
      this.summarizedData.totalGasolineConsumption = 0;
      this.summarizedData.totalGasolineCost = 0;
      data.map((entry: Entry) => {
        this.summarizedData.totalCost += Number(entry.cost);
        if (entry.gasolineVolume) {
          this.summarizedData.totalGasolineConsumption += entry.gasolineVolume;
        }
        if (entry.type === 'tankowanie') {
          this.summarizedData.totalGasolineCost += Number(entry.cost);
        }
      });
    });
  }

}
