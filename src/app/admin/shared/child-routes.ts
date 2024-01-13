import {OrdersComponent} from "../orders/orders.component";
import {AddPageComponent} from "../add-page/add-page.component";
import {DashboardComponent} from "../dashboard/dashboard.component";

export const childRoutes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { icon: 'dashboard', text: 'Dashboard' }
  },
  {
    path: 'orders',
    component: OrdersComponent,
    data: { icon: 'whatshot', text: 'Orders' }
  },
  {
    path: 'add',
    component: AddPageComponent,
    data: { icon: 'add_alert', text: 'Add Product' }
  },
];
