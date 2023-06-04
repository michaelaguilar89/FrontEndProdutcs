import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Models/product';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  //myResponse:any;
  url:string='https://localhost:5001/api/Products/';
  title='';
  id='';
  butonAction='';
  private updateForm = new BehaviorSubject<Product>({}as any);
  constructor(private http:HttpClient){

  } 


  update(product:Product)
{
  this.updateForm.next(product);

}
  getCurrentProduct$(){
   return this.updateForm.asObservable();
  }
   
  getProducts(){
   return this.http.get(this.url);
  
   
}
  insertProduct(product :Product):Observable<Product>{
    return this.http.post<Product>(this.url,product);

  }
  updateProduct(product:Product):Observable<Product>{
    return this.http.put<Product>(this.url,product);
  }
  getProductDetails(Id:string):Observable<Response>{
return this.http.get<Response>(this.url+Id)

  }

  removeProduct(Id:string):Observable<Response>{
    return this.http.delete<Response>(this.url+ Id)
  }
 
}
