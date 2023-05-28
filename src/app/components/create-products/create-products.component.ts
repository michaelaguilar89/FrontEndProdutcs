import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent {

  form:FormGroup;
  constructor(private route:Router,
              private fb:FormBuilder){

                this.form=this.fb.group({
                  Name:['',Validators.required],
                  Price:['',Validators.required],
                  Description:['',Validators.required],
                  Urls:['',Validators.required]
                })

  }
  
  sendForm(){
    console.log(this.form.value);
  
  }
  goBack(){
    this.route.navigate(['']);
  }
}
