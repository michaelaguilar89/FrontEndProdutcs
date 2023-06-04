import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetProductsComponent } from './components/get-products/get-products.component';
import { CreateProductsComponent } from './components/create-products/create-products.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {path:'',component:GetProductsComponent},
  {path:'create',component:CreateProductsComponent},
  {path:'update/:id',component:CreateProductsComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'remove/:id',component:DetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
