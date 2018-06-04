import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ModifySharedModule } from '../shared/modify-shared.module';
import {MatButtonModule} from '@angular/material';


const routes: Routes = [
  {path: 'edit', component: EditComponent},
  {path: 'add', component: AddComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ModifySharedModule,
    MatButtonModule
  ],
  declarations: [AddComponent, EditComponent]
})
export class ModifyItemModule { }
