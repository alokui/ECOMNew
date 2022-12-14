import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  addProductItems(data: Product) {
    console.log('Pro service called')
    return this.http.post('http://localhost:3000/products', data)
  }
}
