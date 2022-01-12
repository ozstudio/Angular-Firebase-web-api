import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories;
  @Input ('category1') category1;

  constructor(private cs:CategoryService) {
    this.categories=this.cs.getCategories().subscribe(categories =>
      {
      this.categories=categories;
      
      
    });

  }

  ngOnInit(): void {
  }

}
