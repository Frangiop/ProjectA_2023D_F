import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  crearProducto(productoNuevo: Producto) {
    throw new Error('Method not implemented.');
  }


  db_url: string = 'http://localhost:3000/productos'

  constructor(private http : HttpClient) { }


  public productData = {
    author: '',
    id: '',
    name: '',
    price: '',
    description: '',
    stars: '',
    image: '',
  };


  getProducts(){  // api !! traer la url  //
    return this.http.get(this.db_url) // aquie hacemos la "peticion "a nuestro array de prodcuts. me de
                                      // me devuelve el array del htt" http://localhost:3000/products"
     // <!--IMPORANTE: aquie llamamos a la api , !! hacemos la peticiosn
       //   para llamar al array de   " http://localhost:3000/comics"  -->     
      
      }

      getProduct(id:number){
        return this.http.get(`${this.db_url}/${id}`)// ya hemos cread la funcion la podemos llamar en "product.components.ts"
       // va con las " `` "
      }
      


      deleteProduct(id:number){
        return this.http.delete(`${this.db_url}/${id}`)
      }
      

      postProduct(product:any){ 
        return this.http.post(this.db_url,product) // ami this.db_url le añado un ,"product"
      }


}
