import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material';
import { MatSortModule } from '@angular/material';

import { DashboardComponent } from './dashboard.component';
import { EntriesTableComponent } from './entries-table/entries-table.component';

const routes: Routes = [
  {path: '', component: DashboardComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatButtonModule,
    MatSortModule
  ],
  declarations: [
    DashboardComponent,
    EntriesTableComponent
  ]
})
export class DashboardModule { }
