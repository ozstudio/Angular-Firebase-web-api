import { Component, OnInit,OnDestroy } from '@angular/core';
import { Observable, Subscription} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../admin/model/product';
import { ProductsComponent } from '../admin/products/products.component';
import { JsonPipe } from '@angular/common';
import { ShoppingCartService } from '../shopping-cart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subscription:Subscription;
  subscription1:Subscription;
  
  
  products:Product[]=[];
  filteredProducts:Product[]=[];
  category1:String;
  cart:any;

  constructor(
    
    private ps:ProductService,
    private router:Router,
    private route:ActivatedRoute,
    private sc:ShoppingCartService
    ) { 
      

     this.subscription =this.ps.getAllProducts().subscribe(products =>{
        this.products=products;

       


        route.queryParamMap.subscribe(params =>{
          this.category1=params.get('category');

          this.filteredProducts=(this.category1)?
          this.products.filter(p =>p.category ===this.category1):
          this.products;
        })

      }
      )


     
  }
  

   async ngOnInit() {
    // console.log('from home init');
  //  this.subscription1 =(await this.sc.getCart()).subscribe(
  //    cart => {
  //      this.cart=cart
  //      for (let index = 0; index < cart.length; index++) {
  //        const element = cart[index];
  //        this.cart=element.quantity;
  //        console.log(this.cart);

         
  //      }
  //    }
  //  )
   
   
  }
  ngOnDestroy(){
   // this.subscription1.unsubscribe();

  }

}
