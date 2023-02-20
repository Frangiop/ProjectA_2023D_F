import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input'; // lo importams de// lo importams de angular materila  angular materila 
import {MatFormFieldModule} from '@angular/material/form-field';// lo importams de angular materila 
import {MatButtonModule} from '@angular/material/button';// lo importams de angular materila 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,// lo importams de angular materila 
    MatFormFieldModule,// lo importams de angular materila 
    MatButtonModule// lo importams de angular materila 
  ], exports:[   // ademas de iporatarlo tenemos que exportarlo manualemnte 
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule
]


})
export class SharedModule { }
