import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  id!:number;
  product!: any;



  constructor(private productService:ProductsService,private activatedRoute:ActivatedRoute, private router:Router) {}


  ngOnInit() :void { // con ngOninit lo que va a hace es cada vez que se inicie la añlicacion va a buscar lo que tiene dentro-
    // aquie simplemente lo que estamos diciendo es que nos mire la ruta que ponemos en el navegador u nos la guarde en nuesta variable "ID"
      this.activatedRoute.paramMap.subscribe(params =>{
      this.id = Number(params.get("id"));
      // esot hace, el servicio , dentro de este pbjeto"this.activatedRoute"
      // esta  accediendo a  este modulo ",private activatedRoute:ActivatedRoute"
    
    } )


// aquie llamamos a nuestro servicio que tiene dentro la funciona ge0prodcut()a la cual lr pasaremos nuestro id para que haga una peticion inidividual..
this.productService.getProduct(this.id).subscribe((data:any)=>{ 
  //console.log(data);
  this.product = data // aquie usms fnalmente el "product!:any;"
})
}
// la metemos fuera del resto de las funciones  !!!!
deleteProduct(){
  this.productService.deleteProduct(this.id).subscribe((data:any)=>{
    this.router.navigate(["/"]) // este router actua aexactamente igual que router link , te redirige a un lugar que ti quireas 
  })
}

}