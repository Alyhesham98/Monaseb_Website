import { Component, OnInit } from '@angular/core';
import { ProductViewModel } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';
import { WishlistService } from 'src/app/services/wishlistService/wishlist.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: ProductViewModel[] = [];

  constructor(
    private productService: ProductsService,
    private wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  onWishlistClicked(product: ProductViewModel) {
    console.log(product);
    if (product.liked === false) {
      this.wishlistService.addToWishlist(product);
      alert(`${product.title} added to wishlist`);
      product.liked = true;
    } else {
      this.wishlistService.removeFromWishlist(product.id);
      alert(`${product.title} removed from wishlist`);
      product.liked = false;
    }
  }
}
