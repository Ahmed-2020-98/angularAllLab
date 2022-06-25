import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit,AfterViewInit {
  catList:Icategory[];
  selectedCatID:number = 0;
// property => received total Price 
receivedOrderTotalPrice:number=0;
// viewchild

// @ViewChild('clientName') ClientName:ElementRef={} as ElementRef;
// @ViewChild('clientName') ClientName:ElementRef|null=null;
// @ViewChild('clientName') ClientName:ElementRef|undefined=undefined;
// ? => safe navigation operator 
// @ViewChild('clientName') ClientName?:ElementRef;
// ! => non null assertion operator
@ViewChild('clientName') ClientName!:ElementRef  ;
// Reference to component
@ViewChild(ProductsComponent) productCompRef!:ProductsComponent;
  constructor() { 
    this.catList=[
      {id:1,name: 'LabTop'},
      {id:2,name: 'TV'},
      {id:3,name: 'Mobile'},
    ];
  }
  
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
  //  if(this.ClientName)
   this.ClientName.nativeElement.value="Value added from ts";
   console.log(this.productCompRef.prdListOfCat);
   
  }



  onTotalPriceChanged(totalPrice:number){
    this.receivedOrderTotalPrice=totalPrice;
  }

  getNewArrOfProduct(){
   console.log(this.productCompRef.prdListOfCat);
    
  }

}
