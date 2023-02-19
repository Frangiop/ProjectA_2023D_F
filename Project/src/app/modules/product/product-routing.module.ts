import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component'; // IMPORTA MANUALMNTE
import { ProductsComponent } from './products/products.component'; // IMPORTA MANUALMNTE

const routes: Routes = [
  {path: "products", component: ProductsComponent}, //  metmos estos dos path y importamos arribva con el eror lo demas ya estaba.-->

  {path: "product/:id", component: ProductComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
