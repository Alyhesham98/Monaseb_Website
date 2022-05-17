import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];
  id = 0;
  name = '';
  details = '';
  status = '';
  price = 0;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Order>('http://monaaseb.com:8000/api/order').subscribe(data => {
      this.orders.push(data);
      this.id = data.id;
      this.name = data.client;
      this.details = data.shop;
      this.price = data.total;
      this.status = 'Unpaid';
    });
  }

}
