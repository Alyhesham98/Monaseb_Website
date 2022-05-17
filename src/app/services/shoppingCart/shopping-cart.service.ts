import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductViewModel } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  shoppingCartProducts: ProductViewModel[] = [];
  shoppingCartChanged = new Subject<ProductViewModel[]>();

  constructor() { }

  getAllShoppingcart() {
    return this.shoppingCartProducts;
  }

  addToShoppingcart(product: ProductViewModel) {
    this.shoppingCartProducts.push(product);
    this.shoppingCartChanged.next(this.shoppingCartProducts);
  }

}
