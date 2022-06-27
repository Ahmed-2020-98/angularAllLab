import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
// httpclient => method
// angular 4.3 => promise
// httpclient => Observable
  constructor(private httpclient:HttpClient) { }
  getAllProducts():Observable<Iproduct[]>{
    // return this.httpclient.get<Iproduct[]>('http://localhost:3000/products');
    return this.httpclient.get<Iproduct[]>(`${environment.APIBaseURL}/products`);

  }

  // getProductsByCatID(catID:number)
  getProductsByCatID(catID:number):Observable<Iproduct[]>{

    return this.httpclient.get<Iproduct[]>(`${environment.APIBaseURL}/products?catID=${catID}`);
  }

  // get product by id
  getProductByID(prdID:number):Observable<Iproduct>{
    return this.httpclient.get<Iproduct>(`${environment.APIBaseURL}/products/${prdID}`)
  }
}
