import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './screens/order/order.component';
import { OrdersqueueComponent } from './screens/ordersqueue/ordersqueue.component';
import { StaffComponent } from './screens/staff/staff.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'screen/neworder', component: OrderComponent },
  { path: 'screen/orders', component: OrdersqueueComponent },
  { path: 'screen/staff', component: StaffComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
