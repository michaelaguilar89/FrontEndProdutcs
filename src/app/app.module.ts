
//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { GetProductsComponent } from './components/get-products/get-products.component';
import { CreateProductsComponent } from './components/create-products/create-products.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    GetProductsComponent,
    CreateProductsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
