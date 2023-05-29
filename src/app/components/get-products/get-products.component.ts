
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-get-products',
  templateUrl: './get-products.component.html',
  styleUrls: ['./get-products.component.css']
})
export class GetProductsComponent {

 
  myResponse:any=[];
  constructor(public service:ProductServiceService,
              private router:Router    
      ){

  }
  
  ngOnInit(){
    this.service.getProducts().subscribe((data:any) =>{
      console.log(data)
      this.myResponse= data;
    })
  
   

  }

  openCreate(){
    this.service.title='Create Product';
    this.service.butonAction='Save';
  }

  update(Id:string ,product:Product){
    this.service.id=Id;
    this.service.title='Update Product';
    this.service.butonAction='Update';
    this.service.update(product);
    this.router.navigate(['/update/'+Id]);
  }
  details(Id:string){
    this.service.id=Id;
    this.service.title='Product Details';
    this.router.navigate(['/details/'+Id]);
  }
  remove(Id:string){
    this.service.id=Id;
    this.service.title='Delete Product';
    this.router.navigate(['/remove/'+Id]);
  }
}
