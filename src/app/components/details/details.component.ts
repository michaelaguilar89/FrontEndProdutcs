import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

   response:any;

  constructor(public service:ProductServiceService,
              private router:Router
    ){

  }

  
  ngOnInit(){
      this.service.getProductDetails(this.service.id).toPromise().then(data=>{
       this.response= data;
       console.log(this.response);
      })
  }
remove(Id:string){
  this.service.removeProduct(this.response.result.id).toPromise().then(data=>{
    
  });
    this.router.navigate(['/']);
}

}
