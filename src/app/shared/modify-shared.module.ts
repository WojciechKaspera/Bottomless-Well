import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModifySharedComponent } from './modify-shared/modify-shared.component';
import {ReactiveFormsModule} from '@angular/forms'
import {MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  declarations: [
    ModifySharedComponent
  ],
  exports: [
    ModifySharedComponent
  ]
})
export class ModifySharedModule { }
