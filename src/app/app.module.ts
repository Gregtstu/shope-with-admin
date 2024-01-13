import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartPageComponent } from './user/cart-page/cart-page.component';
import { MainPageComponent } from './user/main-page/main-page.component';
import { OrderComponent } from './user/order/order.component';
import { ProductPageComponent } from './user/product-page/product-page.component';
import { ProductComponent } from './user/product/product.component';
import { MainLayoutComponent } from './user/shared/main-layout/main-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./user/shared/material/material.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    AppComponent,
    CartPageComponent,
    MainPageComponent,
    OrderComponent,
    ProductPageComponent,
    ProductComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatProgressSpinnerModule,
    MatCardModule,
    FormsModule,
     ReactiveFormsModule,
     HttpClientModule,
     QuillModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
