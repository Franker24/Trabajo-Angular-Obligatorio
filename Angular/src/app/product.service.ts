import { Injectable } from '@angular/core';
import { product } from './types/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = "https://66d2300362816af9a4f61063.mockapi.io/Angular/angular1";
  constructor(private htttp: HttpClient) { }
  getProducts(): Observable<product[]> {
    return this.htttp.get<product[]>(this.url);}
}
