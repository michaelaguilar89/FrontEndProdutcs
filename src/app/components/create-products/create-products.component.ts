import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { Product } from 'src/app/Models/product';
import { ProductServiceService } from 'src/app/services/product-service.service';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent {


  form:FormGroup;
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
   // this.toastr.success('Hello world!', 'Toastr fun!');
  }
  
  sendForm(){
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
    setTimeout(() => {
      this.route.navigate(['/']);  
    },1000 );
    
  
  }
  goBack(){
    this.route.navigate(['']);
  }
}
