import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Entry} from '../../models/entry.interface';
import {Router} from '@angular/router';
import {DataProviderService} from '../../data-provider.service';

@Component({
  selector: 'app-modify-shared',
  templateUrl: './modify-shared.component.html',
  styleUrls: ['./modify-shared.component.scss']
})
export class ModifySharedComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private dataProvider: DataProviderService) {
  }

  @Input()
  entryBeingModified: Entry;
  @Input()
    action: string;

  entryForm = this.formBuilder.group({
    date: ['', [Validators.required]],
    mileage: ['', [Validators.required]],
    cost: ['', [Validators.required]],
    type: '',
    description: '',
    gasolineVolume: ''
  });

  @Input()
  submit() {}

  goBack() {
    this.router.navigateByUrl('dashboard');
  }

  onSubmit() {
    console.log(this.action);
    if (this.action === 'edit') {
      this.editEntry(this.entryForm.value);
    } else if (this.action === 'add') {
      this.addEntry(this.entryForm.value);
    }
  }

  editEntry(data) {
    this.entryBeingModified.date = data.date;
    if (this.entryBeingModified.description) {
      this.entryBeingModified.description = data.description;
    }
    this.entryBeingModified.type = data.type;
    if (this.entryBeingModified.gasolineVolume) {
      this.entryBeingModified.gasolineVolume = data.gasolineVolume;
    }
    this.entryBeingModified.mileage = data.mileage;
    this.entryBeingModified.cost = data.cost;
    this.dataProvider.editData(this.entryBeingModified);
  }

  addEntry(data) {
    const newEntry: Entry = {
      date: data.date,
      description: data.description,
      type: data.type,
      gasolineVolume: data.gasolineVolume,
      mileage: data.mileage,
      cost: data.cost,
    };
    this.dataProvider.addData(newEntry);
  }

  ngOnInit() {
    if (this.action === 'edit') {
    this.entryForm.setValue({
      date: this.entryBeingModified.date,
      mileage: this.entryBeingModified.mileage,
      cost: this.entryBeingModified.cost,
      type: this.entryBeingModified.type,
      description: this.entryBeingModified.description ? this.entryBeingModified.description : '',
      gasolineVolume: this.entryBeingModified.gasolineVolume
    });
    }
  }

}
