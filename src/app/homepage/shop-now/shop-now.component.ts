import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-shop-now',
  templateUrl: './shop-now.component.html',
  styleUrls: ['./shop-now.component.css']
})
export class ShopNowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
