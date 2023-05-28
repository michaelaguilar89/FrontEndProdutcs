import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
