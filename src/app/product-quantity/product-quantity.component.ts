import { Component, OnInit,Input, OnChanges } from '@angular/core';
import { Product } from '../admin/model/product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit{
  @Input('product') product:Product;
  
  @Input ('shopping-cart') shoppingCart;
  countItems;
  
 // @Input('quantity') quantity;
  
  

  constructor(
    private cs:ShoppingCartService
    ) {
     // this.initQuantity();
     }

    

 
  addToCart(){
   
   this.cs.addToCart(this.product);
   

  }
  minusItem(){
    this.countItems == 0 ? null : this.cs.minusItem(this.product);
    
    
   
  }

  async ngOnInit (){

    let cart$=await this.cs.getCart();
    cart$.subscribe(cart =>{
    
     
    let count=0;
    let productId=this.product.id;
    
    for (let index = 0; index < cart.length; index++) {
      this.countItems=0;
      const element = cart[index];
      if(productId == element.product.id) {
        
        return this.countItems=element.quantity;
        
       
      }

      
     
      
    }
  
})


    
  }  

 async initQ(){

    let cart$=await this.cs.getCart();
    cart$.subscribe(cart =>{
    
     
    let count=0;
    let productId=this.product.id;
    
    for (let index = 0; index < cart.length; index++) {
      this.countItems=0;
      const element = cart[index];
      if(productId == element.product.id) {
        
        return this.countItems=element.quantity;
        
       
      }

      
     
      
    }
  
})


  }


}
