import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from '../_model-dto/category/category';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiProductUrl = environment.apiProductUrl;
  private apiBrandUrl = environment.apiBrandUrl;
  private apiCategoryUrl = environment.apiCategoryUrl;


  constructor(private http: HttpClient) { 

  }

  public countProductsByCategoryName(categoryName: string): Observable<any>{
    return this.http.get(`${this.apiProductUrl}/get/product-count/by-category-name/${categoryName}`, { responseType: 'text' });
  }
  /*
  public countProductsByCategoryName(categoryName: string): Observable<number> {
    return this.http.get(`${this.apiProductUrl}/get/product-count/by-category-name/${categoryName}`, { responseType: 'text' })
      .pipe(
        map((count: string) => parseInt(count, 10))  // argument 10 specifying the base for the parsing.
      );
  }
*/

  public getAllParentCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.apiCategoryUrl}/get/all-parent-categories`);
  }

  public getAllCategoriesByParentName(parentCategory: string): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.apiCategoryUrl}/get/all-categories/by-parent/${parentCategory}`);
  }

  public getAllCategoriesWithImgs(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.apiCategoryUrl}/get/all-categories`);
  }

}
