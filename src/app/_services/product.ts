import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../_models/product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
    apiURLProducts = "http://localhost:3000"

  constructor(private http: HttpClient) { }
  
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURLProducts +'/Product');
  }

}
