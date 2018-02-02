import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../orders.service';
import { Order } from '../../order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  actionResult: String;

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
  }

  AddOrder(orderValue: string): void {
    const order = new Order(orderValue);

    const success = this.ordersService.addOrder(order);

    this.actionResult = success ? 'Order added' : 'Cannot add order';
  }
}
