import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from '../admin/model/product';
import { ShoppingCartService } from '../shopping-cart.service';
import { database } from 'firebase';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  
})
export class ProductCardComponent  implements OnInit{
  cart;
  @Input('product') product:Product;
  subscription1:Subscription;



  constructor(
    private cs:ShoppingCartService
    ) { }


   async ngOnInit(){
     
      this.subscription1 =(await this.cs.getCart()).subscribe(
     cart => {
       this.cart=cart
       for (let index = 0; index < cart.length; index++) {
         const element = cart[index];
         this.cart=element.quantity;
         //return this.cart;
         //console.log(this.cart);

         
       }
     }
   )

    }

  addToCart(product:Product){
   
    this.cs.addToCart(product);
    
 
   }
   async getQuantity(){
    // let l=await this.cs.getQuantity(this.product);
     

     
     
   }
   
 
    
  }
