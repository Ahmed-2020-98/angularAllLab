import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
prd:Iproduct|undefined=undefined;
currentPrdID:number=0;
prdIDList:number[]=[];
currentIndex:number=0;
  constructor(private prdService:ProductService,private router:Router,private activateRoute:ActivatedRoute,private location:Location) { }

  ngOnInit(): void {
  //  let sendPrdID=this.activateRoute.snapshot.paramMap.get('pid');
  //  console.log(sendPrdID);
// ternary operator 
  // let sendPrdID:number=(this.activateRoute.snapshot.paramMap.get('pid'))?Number(this.activateRoute.snapshot.paramMap.get('pid')):0;
  //  let foundedPrd=this.prdService.getProductByID(sendPrdID);

  //  if(foundedPrd){
  //   this.prd=foundedPrd;
  //   console.log(this.prd);
    
  //  }
  //  else{
  //   alert("Product not found");
  //   this.location.back();
  //  }
  this.prdIDList= this.prdService.getProductsIDList();
  // console.log(this.prdList);
//  this.currentIndex= this.prdIDList.findIndex((item)=>item==this.currentPrdID);
  
  // this.currentPrdID=(this.activateRoute.snapshot.paramMap.get('pid'))?Number(this.activateRoute.snapshot.paramMap.get('pid')):0;
  //  let foundedPrd=this.prdService.getProductByID(this.currentPrdID);

  //  if(foundedPrd){
  //   this.prd=foundedPrd;
  //   console.log(this.prd);
    
  //  }
  //  else{
  //   alert("Product not found");
  //   this.location.back();
  //  }

  // Last Test case
  // subscribe => async
  this.activateRoute.paramMap.subscribe(
    paramMap=>{
      this.currentPrdID=(paramMap.get('pid'))?Number(paramMap.get('pid')):0;
       let foundedPrd=this.prdService.getProductByID(this.currentPrdID);

   if(foundedPrd){
    this.prd=foundedPrd;
    console.log(this.prd);
    
   }
   else{
    alert("Product not found");
    this.location.back();
   }
    }
  )

  }


  goBack(){
    this.location.back();
  }

  searchProduct(prdName:string){
   let found=this.prdService.searchProductByName(prdName);
   if(found){
    this.prd=found;
   }
   else{
    alert("Product not found");
   }

  }
  goPrev(){
    this.currentIndex= this.prdIDList.findIndex((item)=>item==this.currentPrdID);
    // array[this.currentIndex]
    this.router.navigate(['/Products',this.prdIDList[--this.currentIndex]]);

  }
  goNext(){
    this.currentIndex= this.prdIDList.findIndex((item)=>item==this.currentPrdID);
    this.router.navigate(['/Products',this.prdIDList[++this.currentIndex]]);


  }
}
