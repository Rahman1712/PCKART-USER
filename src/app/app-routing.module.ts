import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { authGuard } from './_auth/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { CategoryComponent } from './products/category/category.component';
import { CategorySubcategoryComponent } from './products/category-subcategory/category-subcategory.component';

const routes: Routes = [
  { path: '', component: HomeComponent ,   pathMatch: 'full', },
  // { path: 'home', component: HomeComponent , },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent ,},
  // { 
  //   path: 'home', 
  //   component: HomeComponent ,
  // },
  { path: 'cart', component: CartComponent,},
  { path: 'products', component: ProductsComponent,},
  { path: 'product-category/:parent_category', component: CategoryComponent,},
  { path: 'product-category/:parent_category/:sub_category', component: CategorySubcategoryComponent,},
  { path: 'orders', component: OrdersComponent ,canActivate: [authGuard],},
  { path: 'profile', component: ProfileComponent ,canActivate: [authGuard],},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
