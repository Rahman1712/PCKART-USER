import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { Category } from '../_model-dto/category/category';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(private productService: ProductService){}
  
  public categoriesList: Category[] | undefined;
  
  ngOnInit(): void {
    this.getAllCategories();
  }

  public getAllCategories(): void{
    this.productService.getAllParentCategories()
    .subscribe({
      next: (next : Category[]) =>{
        this.categoriesList = next;
      },
      error : (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

}
