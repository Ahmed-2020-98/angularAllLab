import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsApiService } from 'src/app/Services/products-api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  catList:Icategory[];
  newPrd:Iproduct={} as Iproduct;
  
  constructor(private prdServiceAPI:ProductsApiService,private router:Router) {
    this.catList=[
      {id:1,name: 'LabTop'},
      {id:2,name: 'TV'},
      {id:3,name: 'Mobile'},
    ];
   }

  ngOnInit(): void {
    
  }

  InsertNewProduct(){
    // First Test case
    //create object
    // satatic data
    // let testNewPrd:Iproduct={
    //   id:66,
    //   name:'NewProduct',
    //   price:55555,
    //   quantity:8,
    //   imgURL:'https://fakeimg.pl/250x100',
    //   catID:3
    // }
    // this.prdServiceAPI.addNewProduct(testNewPrd).subscribe({
    //   next:(prd)=>{
    //     this.router.navigate(['/Products']);
    //   },
    //   error:(err)=>{
    //     alert('Error occurred while adding');

    //   }
    // })

    // Second test case
    this.prdServiceAPI.addNewProduct(this.newPrd).subscribe({
      next:(prd)=>{
        this.router.navigate(['/Products']);
      },
      error:(err)=>{
        alert('Error occurred while adding');

      }
    })


  }

}
