import { Component } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

   response:any;

  constructor(public service:ProductServiceService){

  }

  
  ngOnInit(){
      this.service.getProductDetails(this.service.id).toPromise().then(data=>{
       this.response= data;
       console.log(this.response);
      })
  }
}
