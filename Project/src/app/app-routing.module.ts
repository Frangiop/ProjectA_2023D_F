import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionComponent } from './pages/gestion/gestion.component';
import { HomeComponent } from './pages/home/home.component';
//import { ProductComponent } from './pages/product/product.component';  LAS MOVESMO AL CAMBIAR EL MODUELO
// import { ProductsComponent } from './pages/products/products.component';  LAS MOVESMO AL CAMBIAR EL MODUELO

const routes: Routes = [
  {path: "" ,component:HomeComponent},  // agregamos esta   <!-- agregamos estoy y con eror automatico se pasa arriba  -->
// {path: "products",component:ProductsComponent}, ( SE ELIMINAL AL CREAR EL NUEVO MODUL/O)// y agergamos esta antes también , la  agregamos con el error arroba  <!-- agregamos estoy y con eror automatico se pasa arriba  -->
{path: "gestion" ,component:GestionComponent}, // SE ELIMINAL AL CREAR EL NUEVO MODULO)  esta tb . la teniamos la creamos antes <!-- agregamos estoy y con eror automatico se pasa arriba  -->
// {path: 'product/:id' ,component:ProductComponent}, ( SE ELIMINAL AL CREAR EL NUEVO MODUL/O)  // este e s el hypervinculo que al pincahs en el boton ver mas nos lleva a otra ruta con el detallse de prodcuto 


{
  path: 'product', loadChildren: () => 
    import('./modules/product/product.module').then(m => m.ProductModule) // agregamos el lazy  AQUIEEEEEEEEEEEEEEEEEEEEEEEE
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
