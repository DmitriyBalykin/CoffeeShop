import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersqueueComponent } from './ordersqueue.component';

describe('OrdersqueueComponent', () => {
  let component: OrdersqueueComponent;
  let fixture: ComponentFixture<OrdersqueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersqueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersqueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
