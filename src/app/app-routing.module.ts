import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PathNotFoundComponent } from './errors/path-not-found/path-not-found.component';
import { OurPackagesComponent } from './make-your-shop/our-packages/our-packages.component';
import { PaymentMethodComponent } from './make-your-shop/payment-method/payment-method.component';
import { CongratsComponent } from './make-your-shop/congrats/congrats.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StorePageComponent } from './store-page/store-page.component';
import { EditProductComponent } from './store-page/edit-product/edit-product.component';
import { OurShopsComponent } from './our-shops/our-shops.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddProductComponent } from './store-page/add-product/add-product.component';
import { AddToWishlistComponent } from './wishlist/add-to-wishlist/add-to-wishlist.component';
import { OrdersComponent } from './store-page/orders/orders.component';
import { ReviewsComponent } from './store-page/reviews/reviews.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ViewProductComponent } from './our-shops/view-product/view-product.component';
import { AboutStoreComponent } from './store-page/about-store/about-store.component';
import { ChooseAccountComponent } from './choose-account/choose-account.component';
import { SignupFormComponent } from './make-your-shop/signup-form/signup-form.component';
import { ShopComponent } from './our-shops/shop/shop.component';
import { CheckoutComponent } from './shopping-cart/checkout/checkout.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomepageComponent },
  { path: 'congrats', component: CongratsComponent },
  { path: 'login', component: LoginComponent },
  // REGISTER
  { path: 'choose-account', component: ChooseAccountComponent },
  { path: 'choose-account/register', component: RegisterComponent },
  { path: 'choose-account/services', component: OurPackagesComponent },
  { path: 'choose-account/signup-form', component: SignupFormComponent },
  { path: 'choose-account/payment', component: PaymentMethodComponent },

  { path: 'store', component: StorePageComponent },
  { path: 'edit-product', component: EditProductComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'our-shops', component: OurShopsComponent },
  { path: 'our-shops/:id', component: ShopComponent },
  { path: 'our-shops/:shopId/view-product/:productId', component: ViewProductComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'add-to-wishlist', component: AddToWishlistComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'about-store', component: AboutStoreComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
