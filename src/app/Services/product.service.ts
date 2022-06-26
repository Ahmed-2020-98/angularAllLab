import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 private prdList:Iproduct[];

  constructor() { 
    this.prdList=[
      {id:1,name: 'Dell',price:12000,quantity:0,imgURL:'https://fakeimg.pl/250x100',catID:1},
      {id:6,name: 'Lenovo',price:23000,quantity:3,imgURL:'https://fakeimg.pl/250x100',catID:1},
      {id:11,name: 'LG',price:44000,quantity:2,imgURL:'https://fakeimg.pl/250x100',catID:2},
      {id:7,name: 'Tornado',price:15200,quantity:1,imgURL:'https://fakeimg.pl/250x100',catID:2},
      {id:18,name: 'Redmi',price:35000,quantity:0,imgURL:'https://fakeimg.pl/250x100',catID:3},
      {id:20,name: 'Samsung',price:15800,quantity:6,imgURL:'https://fakeimg.pl/250x100',catID:3},
    ];
  }
  // Get all products 
  getAllProducts():Iproduct[]{
    return this.prdList;
  }

  // Get products with category id
  getProductsByCatID(catID:number):Iproduct[]{
    if(catID==0){
      return this.getAllProducts();
    }
    else{
      return this.prdList.filter(prd=>prd.catID==catID);
    }
  }

  getProductByID(prdID:number):Iproduct|undefined{
    return this.prdList.find(prd=>prd.id==prdID);
  }


  searchProductByName(prdName:string):Iproduct|undefined{
    return this.prdList.find(prd=>prd.name==prdName);
  }
}
