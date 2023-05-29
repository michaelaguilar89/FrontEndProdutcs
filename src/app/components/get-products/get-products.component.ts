
import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  sendTitle(title:string){
    this.service.title=title;
  }

  update(Id:string){
    this.service.id=Id;
    this.sendTitle('Update Product')
    this.router.navigate(['/update/'+Id]);
  }
  details(Id:string){
    this.service.id=Id;
    this.sendTitle('Product Details');
    this.router.navigate(['/details/'+Id]);
  }
  remove(Id:string){
    this.service.id=Id;
    this.sendTitle('Delete Product');
    this.router.navigate(['/remove/'+Id]);
  }
}
