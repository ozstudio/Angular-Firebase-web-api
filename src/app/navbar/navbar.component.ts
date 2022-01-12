import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../admin/model/shopping-cart';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;
  shoppingCartItemCount:number;

  constructor(
    private ss:ShoppingCartService
     ) { }

  async ngOnInit() {
       let cart$=await this.ss.getCart();
   
    
    cart$.subscribe(cart =>{
    let count=0;
    for (let index = 0; index < cart.length; index++) {
      const element = cart[index];
      count += element.quantity;
      
    this.shoppingCartItemCount=count;

    }

  
})

    

  }

}
