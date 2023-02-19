import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/Products'; // nos traemos la

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent {


    productForm! :FormGroup; // para este "FomrGroup" necesit un "constructor"
  
    //el "!" es que me va a llegar en algún momento no hace falta que siempre esté 
    
    // el construcfcot me traerá mi FormBuilder 
    
    constructor(private formBuilder:FormBuilder,private productsService:ProductsService , private router:Router ) {}
  
    public newProduct = this.productsService.productData;
    public prodcutsId= this.productsService.productData.id;




 
    ngOnInit() :void { // no funciona los Validators lo hacemos con angular material 
      this.productForm = this.formBuilder.group({
        
    
          name:[
          this.newProduct.name,[Validators.required],Validators.minLength(1)
          ],
          price:[
          this.newProduct.price,[Validators.required]
          ],
          description:[
            this.newProduct.description,[Validators.required,],
            ],
          stars:[
              this.newProduct.stars,[Validators.required,],
              ],
          image:[
                this.newProduct.image,[Validators.required,],
                ]
      
      })

      this.productForm.valueChanges.subscribe(changes=>{
        this.newProduct = changes 
     })
      }


      onSubmit(){ 
        // console.log(this.newProduct)
        this.productsService.postProduct(this.newProduct).subscribe((data)=>{
         this.router.navigate(["/products"])
           })
   
       }

       /* NO SALE 
       crearProducto(): void {
        // tenemos el prodcuto de la interface también , y nos vamos al servicio par conectarlo a prodcuts una vez creado el prodcuto en formuñaior
        const productoNuevo: Producto = this.productForm.value; // como los nombres de bd-jsoans y la interfaz son iguales y del formulario son toos igules podemos recoger el valor entero de golpo con this.
        //utlizamos serviio , lo inyectamos
        this.productsService.crearProducto(productoNuevo).subscribe(() => {
          this.router.navigate(['/product/products']); // aquie lo mandamos a pagina principal
        }); */

   } 