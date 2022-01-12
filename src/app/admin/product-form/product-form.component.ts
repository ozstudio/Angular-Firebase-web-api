import { Component, OnInit } from '@angular/core';
import {CategoryService} from './../../category.service';
import { ProductService } from 'src/app/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories;
  

  constructor(
    private cs:CategoryService,
    private ps:ProductService,
    private router:Router
    ) {
      //this.categories$=CategoryService.getCategories().subscribe(var = > );
    
   }


  
  ngOnInit(): void {
    // this.categories$= this.cs.getCategories().snapshotChanges();
    this.cs.getCategories().subscribe(
      categories => {this.categories = categories}
    );
    
   
  }
  save(product){
    this.ps.create(product);
    this.router.navigate(["admin/products"]);
         
  }


}
