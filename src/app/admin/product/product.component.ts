import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable} from 'rxjs';
import { sharedStylesheetJitUrl } from '@angular/compiler';
import { CategoryService } from 'src/app/category.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product;
  loaded:boolean;
  id;
  categories;
  
  constructor(
    private ps:ProductService,
    private route:ActivatedRoute,
    private cs:CategoryService,
    private router:Router
    
    ) 
    { 
       this.id =  this.route.snapshot.paramMap.get('id');

      if (this.id) {
        this.ps.getSelectedProduct(this.id).then((doc) => {
          if (doc.exists) {
           this.product=doc.data();
           this.cs.getCategories().subscribe(
           categories => {this.categories = categories}
          );
          }
          this.loaded=true;
          
          })  
      }

    }
  ngOnInit(): void {

}

update(product){
 console.log(product);
 this.ps.uppadeProduct(this.id,product);

 this.router.navigate(['/admin/products']);

}

deleteProduct() {
  if (confirm("are you sure?")) {
    this.ps.deleteProduct(this.id);

  this.router.navigate(['/admin/products']);
  }
  
}


}