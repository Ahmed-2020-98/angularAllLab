import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
// httpclient => method
// angular 4.3 => promise
// httpclient => Observable
// Day6
private httpOptions={};
  constructor(private httpclient:HttpClient) { 
    this.httpOptions={
      headers:new HttpHeaders({ 
        'Content-Type':'application/json'
      })
    };
  }
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

  // add new product 
  addNewProduct(newPrd:Iproduct):Observable<Iproduct>{
    return this.httpclient.post<Iproduct>(`${environment.APIBaseURL}/products`,
                                            JSON.stringify(newPrd),
                                            this.httpOptions)
                                            // .pipe(
                                            //   retry(3),
                                            //   catchError((err)=>{
                                            //     return throwError(()=>{
                                            //       return new Error('Error occurred please try again')
                                            //     })
                                            //   })
                                            // )
  }
}
// retry || catchError

// admin dashboard => add new ,update , delete