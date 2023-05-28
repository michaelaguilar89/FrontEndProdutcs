import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Models/product';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  //myResponse:any;
  url:string='https://localhost:5001/api/Products/';
  constructor(private http:HttpClient){

  } 

  
  getProducts(){
   return this.http.get(this.url);
   
}
  insertProduct(product :Product):Observable<Product>{
    return this.http.post<Product>(this.url,product);

  }
}
