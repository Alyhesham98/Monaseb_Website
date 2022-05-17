import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductViewModel } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  wishlistedProducts: ProductViewModel[] = [];
  wishlistChanged = new Subject<ProductViewModel[]>();

  constructor() {}

  addToWishlist(product: ProductViewModel) {
    this.wishlistedProducts.push(product);
    this.wishlistChanged.next(this.wishlistedProducts);
  }

  removeFromWishlist(index: number) {
    this.wishlistedProducts.splice(index, 1);
    this.wishlistChanged.next(this.wishlistedProducts);
  }

  getAllWishlistedProducts() {
    return this.wishlistedProducts;
  }
}
