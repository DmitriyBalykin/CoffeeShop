import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  user = 'Admin';

  constructor() { }

  ngOnInit() {
  }

  showNewOrder(): void {
  }

  showOrders(): void {
  }

  showStaff(): void {
  }
}
