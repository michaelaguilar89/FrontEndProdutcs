import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { Product } from 'src/app/Models/product';
import { ProductServiceService } from 'src/app/services/product-service.service';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent {

  
  product:any;
  form:FormGroup;
  subscription?:Subscription;
  constructor(private route:Router,
              private fb:FormBuilder,
              public service:ProductServiceService
              ){

                this.form=this.fb.group({
                  Name:['',Validators.required],
                  Price:['',Validators.required],
                  Description:['',Validators.required],
                  Urls:['',Validators.required]
                })

  }

  ngOnInit(){
   if(this.service.title=='Update Product'){
   this.subscription=  this.service.getCurrentProduct$()
   .subscribe(data =>{
      this.product=data as Product;
      console.log(this.product);
    
    
      this.form.patchValue({
        Name:this.product.name,
        Price:this.product.price,
        Description:this.product.description,
        Urls:this.product.urls
      });
    });
   }//end of if
  }

  ngOnDestroy(){
    this.subscription?.unsubscribe();
  }
  
  sendForm(){


    
    if(this.service.title=='Update Product'){//update product
      
     
      const product :Product = {
        Name:this.form.get('Name')?.value,
        Price:this.form.get('Price')?.value,
        Description:this.form.get('Description')?.value,
        Urls:this.form.get('Urls')?.value,
        Id:this.service.id
      };
    
      this.service.updateProduct(product).subscribe(data=>{
        console.log(data);
      });

    }else{//insert product

      console.log(this.form.value);
      const product :Product = {
        Name:this.form.get('Name')?.value,
        Price:this.form.get('Price')?.value,
        Description:this.form.get('Description')?.value,
        Urls:this.form.get('Urls')?.value
      };
    this.service.insertProduct(product).subscribe(data=>{
      console.log(data);
    });
    
    }//end of else
    setTimeout(() => {
      this.route.navigate(['/']);  
    },1000 );
    
    
  
  }
  goBack(){
    this.route.navigate(['']);
  }
}
