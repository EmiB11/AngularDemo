import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MOdulos exportados de Angular Material
import{MatButtonModule} from '@angular/material/button'
import{MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ]
})
export class MaterialModule { }
