import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';
import { ProductsApiService } from 'src/app/Services/products-api.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  // providers:[ProductService]
})
export class ProductsComponent implements OnInit,OnChanges {
  todayData:Date=new Date();

  // declare array from Iproduct type
  // prdList:Iproduct[];
  // Day3
  prdListOfCat:Iproduct[]=[];
 @Input() receivedCatID:number = 0;
  orderTotalPrice:number = 0;
 @Output() totalPriceChanged:EventEmitter<number>;
  // For Lab
  // catList:Icategory[];
  // selectedCatID:number = 0;
  // intialize , inject service
  // Day4
  constructor(private prdServices:ProductService,
            private router:Router
            ,private prdAPIservice:ProductsApiService) {
    this.totalPriceChanged=new EventEmitter<number>();
    // intialize array with anonymous objects
    // this.prdList=[
    //   {id:1,name: 'Dell',price:12000,quantity:0,imgURL:'https://fakeimg.pl/250x100',catID:1},
    //   {id:6,name: 'Lenovo',price:23000,quantity:3,imgURL:'https://fakeimg.pl/250x100',catID:1},
    //   {id:11,name: 'LG',price:44000,quantity:2,imgURL:'https://fakeimg.pl/250x100',catID:2},
    //   {id:7,name: 'Tornado',price:15200,quantity:1,imgURL:'https://fakeimg.pl/250x100',catID:2},
    //   {id:18,name: 'Redmi',price:35000,quantity:0,imgURL:'https://fakeimg.pl/250x100',catID:3},
    //   {id:20,name: 'Samsung',price:15800,quantity:6,imgURL:'https://fakeimg.pl/250x100',catID:3},
    // ];

    // this.catList=[
    //   {id:1,name: 'LabTop'},
    //   {id:2,name: 'TV'},
    //   {id:3,name: 'Mobile'},
    // ];

   }
  ngOnChanges(): void {
    // this.getProductsOfCat();
    // Day4
    // this.prdListOfCat=this.prdServices.getProductsByCatID(this.receivedCatID);
    // Day5
    this.prdAPIservice.getProductsByCatID(this.receivedCatID).subscribe(data=>{
      this.prdListOfCat=data;
    });
    
  }
   ngOnInit(): void {
    // this.getProductsOfCat();
    // Day4
    // this.prdListOfCat=this.prdServices.getProductsByCatID(this.receivedCatID);
    // Day5
    this.prdAPIservice.getAllProducts().subscribe(prdList=>{
      this.prdListOfCat=prdList;
    })

  }

  //  item ,index
   trackByFunc(index:number,item:Iproduct){
    return item.id;

   }

  //  private getProductsOfCat(){
  //   if(this.receivedCatID==0){
  //    this.prdListOfCat= Array.from(this.prdList);
  //    return;

  //   }
  //  this.prdListOfCat= this.prdList.filter((prd)=>prd.catID==this.receivedCatID);
  //  }
   updateTotalPrice(prdPrice:number,itemCount:any){
    // this.orderTotalPrice +=(prdPrice * itemCount);
    // Ways of convert string to number
    // this.orderTotalPrice +=(prdPrice * parseInt(itemCount));
    // this.orderTotalPrice +=(prdPrice * Number(itemCount));
    // this.orderTotalPrice +=(prdPrice * itemCount as number);
    this.orderTotalPrice +=(prdPrice * +itemCount);
    // fire event
    this.totalPriceChanged.emit(this.orderTotalPrice);



   }



  //  Day4
  openProductDetails(prdID:number){


    this.router.navigate(['Products',prdID]);
  }
}
