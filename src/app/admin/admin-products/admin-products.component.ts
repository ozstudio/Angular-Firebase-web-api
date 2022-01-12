import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../model/product';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit,OnDestroy {
  products:Product[];
  filteredProducts:any[];
  subscription:Subscription;
  

  constructor(
    private ps:ProductService,
    
    ) {
      
     
    
  }

  ngOnInit() {
  
   this.subscription = this.ps.getAllProducts().subscribe(
      products =>this.filteredProducts = this.products = products
      
    );
    
    
  }

  search(query:string){
    this.filteredProducts = (query) ?
    this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
    this.products;
  }
  ngOnDestroy(){
    //this.subscription.unsubscribe();
  }

}
