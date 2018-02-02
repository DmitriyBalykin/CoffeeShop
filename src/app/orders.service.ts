import { Injectable } from '@angular/core';
import { Order } from './order';

@Injectable()
export class OrdersService {

  orders: Order[] = [];

  constructor() {}

  public addOrder(order: Order): boolean {
    this.orders.push(order);
    return true;
  }

  public getOrders(): Order[] {
    console.log('Returning orders: ' + JSON.stringify(this.orders));

    return this.orders;
  }
}
