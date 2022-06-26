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
  constructor(private prdService:ProductService,private router:Router,private activateRoute:ActivatedRoute,private location:Location) { }

  ngOnInit(): void {
  //  let sendPrdID=this.activateRoute.snapshot.paramMap.get('pid');
  //  console.log(sendPrdID);
// ternary operator 
  let sendPrdID:number=(this.activateRoute.snapshot.paramMap.get('pid'))?Number(this.activateRoute.snapshot.paramMap.get('pid')):0;
   let foundedPrd=this.prdService.getProductByID(sendPrdID);

   if(foundedPrd){
    this.prd=foundedPrd;
    console.log(this.prd);
    
   }
   else{
    alert("Product not found");
    this.location.back();
   }

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

}
