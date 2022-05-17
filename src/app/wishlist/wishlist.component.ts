import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductViewModel } from '../models/product.model';
import { WishlistService } from '../services/wishlistService/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit, OnDestroy {
  wishlistedProducts: ProductViewModel[] = [];
  private subscription: Subscription;

  constructor(private wishlistService: WishlistService) {}

  ngOnInit(): void {
    this.wishlistedProducts = this.wishlistService.getAllWishlistedProducts();
    this.subscription = this.wishlistService.wishlistChanged.subscribe(
      (products: ProductViewModel[]) => {
        this.wishlistedProducts = products;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onRemoveWishlist(index: number) {
    this.wishlistService.removeFromWishlist(index);
    console.log(index);
  }
}
