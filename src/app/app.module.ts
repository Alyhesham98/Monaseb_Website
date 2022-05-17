import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ShopNowComponent } from './homepage/shop-now/shop-now.component';
import { AdsSectionComponent } from './homepage/ads-section/ads-section.component';
import { OurServicesComponent } from './homepage/our-services/our-services.component';
import { ContactUsComponent } from './homepage/contact-us/contact-us.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PathNotFoundComponent } from './errors/path-not-found/path-not-found.component';
import { SignupFormComponent } from './make-your-shop/signup-form/signup-form.component';
import { PaymentMethodComponent } from './make-your-shop/payment-method/payment-method.component';
import { OurPackagesComponent } from './make-your-shop/our-packages/our-packages.component';
import { CongratsComponent } from './make-your-shop/congrats/congrats.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StorePageComponent } from './store-page/store-page.component';
import { EditProductComponent } from './store-page/edit-product/edit-product.component';
import { OurShopsComponent } from './our-shops/our-shops.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddProductComponent } from './store-page/add-product/add-product.component';
import { AddToWishlistComponent } from './wishlist/add-to-wishlist/add-to-wishlist.component';
import { SecondHeaderComponent } from './second-header/second-header.component';
import { OrdersComponent } from './store-page/orders/orders.component';
import { ReviewsComponent } from './store-page/reviews/reviews.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ViewProductComponent } from './our-shops/view-product/view-product.component';
import { AboutStoreComponent } from './store-page/about-store/about-store.component';
import { ChooseAccountComponent } from './choose-account/choose-account.component';
import { ScrollTopService } from './ScrollTopService.service';
import { ShopComponent } from './our-shops/shop/shop.component';
import { CheckoutComponent } from './shopping-cart/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ShopNowComponent,
    AdsSectionComponent,
    OurServicesComponent,
    ContactUsComponent,
    HomepageComponent,
    PathNotFoundComponent,
    SignupFormComponent,
    PaymentMethodComponent,
    OurPackagesComponent,
    CongratsComponent,
    LoginComponent,
    RegisterComponent,
    StorePageComponent,
    EditProductComponent,
    OurShopsComponent,
    WishlistComponent,
    AddProductComponent,
    AddToWishlistComponent,
    SecondHeaderComponent,
    OrdersComponent,
    ReviewsComponent,
    AboutUsComponent,
    ShoppingCartComponent,
    ViewProductComponent,
    AboutStoreComponent,
    ChooseAccountComponent,
    ShopComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }, ScrollTopService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
