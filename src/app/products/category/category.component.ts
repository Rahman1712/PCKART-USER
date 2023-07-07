import { HttpErrorResponse } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/_model-dto/category/category';
import { ProductService } from 'src/app/_services/product.service';
import { map } from 'rxjs';
import { ImageProcessingServiceService } from 'src/app/_services/image-processing-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  constructor(private productService: ProductService,
    private imageProcessingService: ImageProcessingServiceService,
    private route: ActivatedRoute){}

  subCategoriesList: Category[];
  parentCategoryName: string ;
  categoriesList: Category[];
  noOfProductsByCategoryArray: number[] ;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.parentCategoryName = params['parent_category'];
    });
    this.getAllCategoriesByParentName(this.parentCategoryName);

    const c = this.categoryCount('Moniters');
    console.log(`CCCC : ${c}`)


    console.log(`CCCCrrr : ${this.subCategoriesList}`)

    // this.ccc();
  }

  public ccc(){
    this.subCategoriesList.map((
      category: Category) => console.log(`ARR : ${category.name}`)
    );
  }

  public categoryCount(categoryName: string ): any{
    this.productService.countProductsByCategoryName(categoryName)
    .subscribe({
      next: (next: string) => {
        console.log(`CCCC : ${next}`)
        return next;
      },
      error: (error: HttpErrorResponse) => {
        alert(`COUNT ERROR : ${error.message}`);
        return null;
      }
    });
  }
  
  public getAllCategoriesByParentName(parentCategory: string): void {
    this.productService.getAllCategoriesByParentName(parentCategory)
      .pipe(
        map((categories: Category[], i) =>
          categories.map((category: Category) =>
            this.imageProcessingService.createCategoryImage(category)
          )
        )
      )
      .subscribe({
        next: (next: Category[]) => {
          this.subCategoriesList = next;
          console.log(this.subCategoriesList);
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
        }
      });
  }
  
  /*
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.parentCategoryName = params['parent_category'];
    })
    this.getAllCategoriesByParentName(this.parentCategoryName);

    console.log(this.subCategoriesList)
  }

  public getAllCategoriesByParentName(parentCategory: string): void{
    this.productService.getAllCategoriesByParentName(parentCategory)
    .pipe(
      map((categories: Category[] , i) => 
        categories.map((category: Category) => 
          this.imageProcessingService.createCategoryImage(category)
        )
      )
    )
    .subscribe({
      next: (next : Category[]) =>{
        this.subCategoriesList = next;
        console.log(this.subCategoriesList)
      },
      error : (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }
  */

}
