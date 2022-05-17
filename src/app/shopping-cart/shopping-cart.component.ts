import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductViewModel } from '../models/product.model';
import { ShoppingCartService } from '../services/shoppingCart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart: ProductViewModel[] = [];
  subtotal = 0;
  totalPrice = 0;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingCart = this.shoppingCartService.getAllShoppingcart();
    console.log(this.shoppingCart);

    this.shoppingCart.forEach(product => {
      this.subtotal = this.subtotal + +product.price;
    });

    this.totalPrice = this.subtotal + 50;
  }

}
