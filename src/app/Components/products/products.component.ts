import { Component, OnInit } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // declare array from Iproduct type
  prdList:Iproduct[];
  todayData:Date=new Date();
  // For Lab
  catList:Icategory[];
  selectedCatID:number = 0;
  constructor() {
    // intialize array with anonymous objects
    this.prdList=[
      {id:1,name: 'Dell',price:12000,quantity:0,imgURL:'https://fakeimg.pl/250x100',catID:1},
      {id:6,name: 'Lenovo',price:23000,quantity:3,imgURL:'https://fakeimg.pl/250x100',catID:1},
      {id:11,name: 'LG',price:44000,quantity:2,imgURL:'https://fakeimg.pl/250x100',catID:2},
      {id:7,name: 'Tornado',price:15200,quantity:1,imgURL:'https://fakeimg.pl/250x100',catID:2},
      {id:18,name: 'Redmi',price:35000,quantity:0,imgURL:'https://fakeimg.pl/250x100',catID:3},
      {id:20,name: 'Samsung',price:15800,quantity:6,imgURL:'https://fakeimg.pl/250x100',catID:3},
    ];

    this.catList=[
      {id:1,name: 'LabTop'},
      {id:2,name: 'TV'},
      {id:3,name: 'Mobile'},
    ];

   }
  //  item ,index
   trackByFunc(index:number,item:Iproduct){
    return item.id;

   }

  ngOnInit(): void {
  }

}
