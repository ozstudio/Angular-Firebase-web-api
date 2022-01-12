import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import { CheckOutComponent } from './check-out/check-out.component';
import { LoginComponent } from './login/login.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { HomeComponent } from './home/home.component';
import { CategoryService } from './category.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { ProductsComponent } from './admin/products/products.component';
import { ProductComponent } from './admin/product/product.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCartService } from './shopping-cart.service';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavbarComponent,
    HomeComponent,
    ProductFormComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    ProductsComponent,
    ProductComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ShoppingCartComponent,
    ProductQuantityComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    NgbModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'products',component:ProductsComponent},
      {path:'shopping-cart',component:ShoppingCartComponent},
      {path:'check-out',component:CheckOutComponent},
      {path:'order-success',component:OrderSuccessComponent},
      {path:'login',component:LoginComponent},
      {path:'admin/product-form',component:ProductFormComponent},
      {path:'admin/products',component:AdminProductsComponent},
      {path:'admin/products/:id',component:ProductComponent},
      {path:'admin/orders',component:AdminOrdersComponent},
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
    
  ],
  providers: [
    CategoryService,
    ProductService,
    ShoppingCartService,
    
    
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
