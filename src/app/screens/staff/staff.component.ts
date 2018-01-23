import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  staff: string[] = [
    'Adam',
    'Bill',
    'Mage'
  ];

  constructor() { }

  ngOnInit() {
  }
}
