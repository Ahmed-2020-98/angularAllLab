import { Component, OnInit } from '@angular/core';
import { StoreData } from 'src/app/Models/store-data';
import { StoreInfo } from 'src/app/Models/store-info';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

storeInfo:StoreInfo={name:'ITI Store',
                    coverImgURL:'https://fakeimg.pl/250x100/',
                    branches:["Cairo","Qena","Sohag","Smart"]};
  // class property 
storeDataClass:StoreData;
  constructor() {
    this.storeDataClass=new StoreData('ITI From class',
                                  'https://fakeimg.pl/250x100/',
                                  ["Cairo","Qena","Sohag","Smart"]);
    
   }

  ngOnInit(): void {
  }

}
