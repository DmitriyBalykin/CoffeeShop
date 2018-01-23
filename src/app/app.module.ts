import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderComponent } from './screens/order/order.component';
import { OrdersqueueComponent } from './screens/ordersqueue/ordersqueue.component';
import { StaffComponent } from './screens/staff/staff.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    WorkspaceComponent,
    NavbarComponent,
    OrderComponent,
    OrdersqueueComponent,
    StaffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
