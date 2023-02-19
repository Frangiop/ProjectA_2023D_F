import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
//import { ProductsComponent } from './pages/products/products.component'; al copiarles en el moduloe nuevo se van 
import { GestionComponent } from './pages/gestion/gestion.component';
import { NavComponent } from './core/nav/nav.component';
import { FooterComponent } from './core/footer/footer.component';
import { HttpClientModule } from "@angular/common/http";
// import { ProductComponent } from './pages/product/product.component'; al copiarles en el moduloe nuevo se van 
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './pages/gestion/details/details.component';
import { SharedModule } from './modules/shared/shared.module';
//import {MatFormFieldModule} from '@angular/material/form-field'; l pasamos shaerd
// import {MatInputModule} from '@angular/material/input';  l pasamos shaerd

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // ProductsComponent, lo psamos a modules 
    GestionComponent,
    NavComponent,
    FooterComponent,
    // ProductComponent,  lo pasamos a modules 
    DetailsComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //MatFormFieldModule, l pasamos shaerd
    //MatInputModule l pasamos shaerd
    SharedModule   // importamos el moduloe creado shared aquie 
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
