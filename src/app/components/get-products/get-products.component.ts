
import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-get-products',
  templateUrl: './get-products.component.html',
  styleUrls: ['./get-products.component.css']
})
export class GetProductsComponent {

 
  myResponse:any=[];
  constructor(public service:ProductServiceService){

  }
  
  ngOnInit(){
    this.service.getProducts().subscribe((data:any) =>{
      console.log(data)
      this.myResponse= data;
    })
  
  }

}
