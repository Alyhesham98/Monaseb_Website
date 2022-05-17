import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductViewModel } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';
import { ShoppingCartService } from 'src/app/services/shoppingCart/shopping-cart.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent implements OnInit {
  currentProduct: ProductViewModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
    private shoppingCartService: ShoppingCartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.currentProduct = this.productService.getProductById(
        +params.productId
      );
    });
  }

  onAddToCart() {
    this.shoppingCartService.addToShoppingcart(this.currentProduct);
    alert(
      `${this.currentProduct.title} has been added to shopping cart!`
    );
    this.router.navigate(['shopping-cart']);
  }
}
