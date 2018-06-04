import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModifySharedComponent } from './modify-shared/modify-shared.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: [
    ModifySharedComponent
  ],
  exports: [
    ModifySharedComponent
  ]
})
export class ModifySharedModule { }
