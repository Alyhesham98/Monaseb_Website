import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShopViewModel } from '../models/shop.model';

@Component({
  selector: 'app-our-shops',
  templateUrl: './our-shops.component.html',
  styleUrls: ['./our-shops.component.css'],
})
export class OurShopsComponent implements OnInit {
  shops: ShopViewModel[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://api.monaaseb.com/api/shops').subscribe((shops: ShopViewModel[]) => {
      this.shops = shops;
      console.log(shops);
    });
  }
}
