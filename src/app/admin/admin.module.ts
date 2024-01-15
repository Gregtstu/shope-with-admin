import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { AddPageComponent } from './add-page/add-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './shared/auth.guard';
import {MatSelectModule} from '@angular/material/select';
import { QuillModule } from 'ngx-quill';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from "@angular/material/sidenav";
import { WheelComponent } from './wheel/wheel.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginComponent,
    DashboardComponent,
    OrdersComponent,
    AddPageComponent,
    EditPageComponent,
    WheelComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    QuillModule.forRoot(),
    RouterModule.forChild([
    {
        path: '', component: AdminLayoutComponent, children:[
          {path: '', redirectTo:'/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginComponent},
          {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
          {path: 'orders', component: OrdersComponent, canActivate: [AuthGuard]},
          {path: 'add', component: AddPageComponent, canActivate: [AuthGuard]},
          {path: 'wheel', component: WheelComponent, canActivate: [AuthGuard]},
          {path: 'product/:id/edit', component: EditPageComponent, canActivate: [AuthGuard]}
        ]
    }
    ])
  ],

})
export class AdminModule { }
