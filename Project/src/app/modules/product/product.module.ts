import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './products/products.component'; // LO IMPORTO MANUAL
import { ProductComponent } from './product/product.component';// LO IMPORTO MANUAL
import { SharedModule } from '../shared/shared.module';// LO IMPORTO MANUAL

@NgModule({
  declarations: [
    ProductsComponent, // LO IMPORTO
    ProductComponent // LO IMPORTO

  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule  // importo tb  el modeile SHARED
  ]
})
export class ProductModule { }
