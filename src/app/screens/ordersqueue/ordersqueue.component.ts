import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../orders.service';

@Component({
  selector: 'app-ordersqueue',
  templateUrl: './ordersqueue.component.html',
  styleUrls: ['./ordersqueue.component.css']
})
export class OrdersqueueComponent implements OnInit {

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
  }

}
