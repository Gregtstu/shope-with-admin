import {OrdersComponent} from "../orders/orders.component";
import {AddPageComponent} from "../add-page/add-page.component";
import {EditPageComponent} from "../edit-page/edit-page.component";
import {DashboardComponent} from "../dashboard/dashboard.component";

export const childRoutes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { icon: 'dashboard', text: 'Table' }
  },
  {
    path: 'orders',
    component: OrdersComponent,
    data: { icon: 'orders', text: 'orders' }
  },
  {
    path: 'add',
    component: AddPageComponent,
    data: { icon: 'add', text: 'add' }
  },
  {
    path: 'product/:id/edit',
    component: EditPageComponent,
    data: { icon: 'table', text: 'product' }
  }
];
