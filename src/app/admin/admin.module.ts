import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import {MaterialModule} from "./shared/material/material.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {childRoutes} from "./shared/child-routes";
import {LoginComponent} from "./login/login.component";

@NgModule({
  declarations: [
    AdminLayoutComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginComponent},
          ...childRoutes,
        ]
      }
    ]),
    MatSidenavModule,
  ],
})
export class AdminModule { }
