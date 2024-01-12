import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './user/cart-page/cart-page.component';
import { MainPageComponent } from './user/main-page/main-page.component';
import { OrderComponent } from './user/order/order.component';
import { ProductPageComponent } from './user/product-page/product-page.component';
import { MainLayoutComponent } from './user/shared/main-layout/main-layout.component';
import {AdminModule} from "./admin/admin.module";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      // {path: '', redirectTo: '/phone', pathMatch: 'full'},
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: MainPageComponent},
      {path: 'product/:id', component: ProductPageComponent},
      {path: 'cart', component: CartPageComponent},
      {path: 'order', component: OrderComponent},
      // {path: 'phone', component: MainPageComponent},
      // {path: 'laptop', component: MainPageComponent},
      // {path: 'tablet', component: MainPageComponent},
    ]
  },
  {path: 'admin', loadChildren: ()=> import('./admin/admin.module').then(m => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
