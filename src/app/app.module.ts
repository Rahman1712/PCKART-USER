import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ForgotComponent } from './forgot/forgot.component';
import { WishComponent } from './wish/wish.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductService } from './_services/product.service';
import { AuthService } from './_services/auth.service';
import { TokenInterceptorService } from './_services/token-interceptor.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from './products/category/category.component';
import { CategorySubcategoryComponent } from './products/category-subcategory/category-subcategory.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    CartComponent,
    PaymentComponent,
    OrdersComponent,
    ProfileComponent,
    ViewProductComponent,
    ForgotComponent,
    WishComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    CategorySubcategoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
  ],
  providers: [
    ProductService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
