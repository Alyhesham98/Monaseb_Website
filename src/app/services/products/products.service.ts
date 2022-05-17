import { Injectable } from '@angular/core';
import { ProductViewModel } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: ProductViewModel[] = [
    {
      id: 1,
      title: 'Shoes from Adidas',
      price: '2500',
      priceBeforeDiscount: '2600 L.E',
      image: 'assets/imgs/clothes/adidas-shoes.webp',
      liked: false,
      quantity: 1
    },
    {
      id: 2,
      title: 'Bag from Gucci',
      price: '1500',
      priceBeforeDiscount: '1600 L.E',
      image: 'assets/imgs/clothes/gucci-bag.jpg',
      liked: false,
      quantity: 1
    },
    {
      id: 3,
      title: 'Heels from Aldo',
      price: '1700',
      priceBeforeDiscount: '1800 L.E',
      image: 'assets/imgs/clothes/heels.jpg',
      liked: false,
      quantity: 1
    },
    {
      id: 4,
      title: 'Shoes from Nike',
      price: '2500',
      priceBeforeDiscount: '2800 L.E',
      image: 'assets/imgs/clothes/nike-shoes.webp',
      liked: false,
      quantity: 1
    },
    {
      id: 5,
      title: 'T-shirt from Polo',
      price: '1500',
      priceBeforeDiscount: '1600 L.E',
      image: 'assets/imgs/clothes/polo.webp',
      liked: false,
      quantity: 1
    },
    {
      id: 6,
      title: 'Short from Adidas',
      price: '700',
      priceBeforeDiscount: '1000 L.E',
      image: 'assets/imgs/clothes/adidas-short.webp',
      liked: false,
      quantity: 1
    },
    {
      id: 7,
      title: 'Chemise from Zara',
      price: '500',
      priceBeforeDiscount: '600 L.E',
      image: 'assets/imgs/clothes/chemise.jpg',
      liked: false,
      quantity: 1
    },
    {
      id: 8,
      title: 'Suit from Polo',
      price: '1500',
      priceBeforeDiscount: '1600 L.E',
      image: 'assets/imgs/clothes/suit.jpg',
      liked: false,
      quantity: 1
    },
    {
      id: 9,
      title: `Perfume from Mcdonald's`,
      price: '400',
      priceBeforeDiscount: '500 L.E',
      image: 'assets/imgs/clothes/perfume.jpg',
      liked: false,
      quantity: 1
    },
    {
      id: 10,
      title: 'Shoes from Adidas',
      price: '2500',
      priceBeforeDiscount: '2600 L.E',
      image: 'assets/imgs/clothes/adidas-shoes.webp',
      liked: false,
      quantity: 1
    },
    {
      id: 11,
      title: 'Bag from Gucci',
      price: '1500',
      priceBeforeDiscount: '1600 L.E',
      image: 'assets/imgs/clothes/gucci-bag.jpg',
      liked: false,
      quantity: 1
    },
    {
      id: 12,
      title: 'Heels from Aldo',
      price: '1700',
      priceBeforeDiscount: '1800 L.E',
      image: 'assets/imgs/clothes/heels.jpg',
      liked: false,
      quantity: 1
    },
  ];

  constructor() {}

  getAllProducts() {
    return this.products;
  }

  getProductById(index: number) {
    return this.products[index - 1];
  }
}
