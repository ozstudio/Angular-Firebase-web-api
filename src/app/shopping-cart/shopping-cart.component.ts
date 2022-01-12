import { Component, OnInit, Input, Output} from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { count } from 'rxjs/operators';
import { Product } from '../admin/model/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { element } from 'protractor';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{
  @Input('product') product:Product;
  products:any;
  countItems:number;
  obj:any[]=[];

  constructor(private ss:ShoppingCartService) { }

 
 async ngOnInit(){

  let cart$=await this.ss.getCart();
    
  cart$.subscribe(cart =>{
    
    this.products=cart;
    this.countItems=0;
    
    
  for (let index = 0; index < cart.length; index++) {
    
    const element = cart[index];
   
    this.countItems += element.quantity;
    
    
  }
  return this.countItems;

})


   

 }


 async initQ() {
  

    let cart$=await this.ss.getCart();
    
    cart$.subscribe(cart =>{
     
    let count=0;
    for (let index = 0; index < cart.length; index++) {
      this.countItems=0;
      const element = cart[index];
      count += element.quantity;
      
      this.obj.push(element);
      this.countItems=element.quantity;
      
      this.countItems=element.quantity;
    }
    this.countItems=count;
  
})



  }


 

getTotalPriceOfItem(quantity:number,price:number){
 return (quantity*price);
  
}
  add(){
  // console.log("from sh cart");
 // this.ss.addToCart(this.product);
 
  
}


}
