import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';
import { StoreData } from 'src/app/Models/store-data';
import { StoreInfo } from 'src/app/Models/store-info';
import { PromotionAdsService } from 'src/app/Services/promotion-ads.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {

storeInfo:StoreInfo={name:'ITI Store',
                    coverImgURL:'https://fakeimg.pl/250x100/',
                    branches:["Cairo","Qena","Sohag","Smart"]};
  // class property 
storeDataClass:StoreData;
  //  flag property 
  showImg:boolean=true;
  userFeedback:string="Good";

  // Day5
  //  subscription!:Subscription;
   subscription:Subscription[]=[];
  constructor(private promoAds:PromotionAdsService) {
    this.storeDataClass=new StoreData('ITI From class',
                                  'https://fakeimg.pl/250x100/',
                                  ["Cairo","Qena","Sohag","Smart"]);
    
   }
 


   toggleImg(){

    this.showImg=!this.showImg;
   }


  ngOnInit(): void {

    // // object
    // let x={
    //   // three callback functions
    //   // next() , error()  , complete()
    //   next:(data:string)=>{
    //     console.log(data);
        
    //   },
    //   error:(err:string)=>{
    //     console.log(err);
        
    //   },
    //   complete:()=>{
    //     console.log("Ads finished");
        
    //   }
    // }
    // // this.promoAds.getScheduleAds(2).subscribe(object)
    // this.promoAds.getScheduleAds(2).subscribe(x);


    // let adsSubscribition:Subscription= this.promoAds.getScheduleAds(2).subscribe(
      // this.subscription= this.promoAds.getScheduleAds(2).subscribe(
    // let adsSubscribition= this.promoAds.getScheduleAds(2).subscribe(
    //   {
    //    next:(data:string)=>{
    //     console.log(data);
        
    //   },
    //   error:(err:string)=>{
    //     console.log(err);
        
    //   },
    //   complete:()=>{
    //     console.log("Ads finished");
        
    //   }
    //   }
    // );
    // // adsSubscribition.unsubscribe();
    // this.subscription.push(adsSubscribition);


    // Operators cases
    //  let obsever={
    //   // three callback functions
    //   // next() , error()  , complete()
    //   next:(data:string)=>{
    //     console.log(data);
        
    //   },
    //   error:(err:string)=>{
    //     console.log(err);
        
    //   },
    //   complete:()=>{
    //     console.log("Ads finished");
    //   }
    // }
    // let filterObservable = this.promoAds.getScheduleAds(3).pipe(
    //   filter(ad=>ad.includes("Black Friday"))
    //   ,map(ad=>"Ad: "+ad)
    // );

    // let adsSubscribition= filterObservable.subscribe(obsever);
    // this.subscription.push(adsSubscribition);



    //operator => From & of
   let sub= this.promoAds.getAllAds().subscribe(ad=>{
      console.log(ad);
      
    })
    this.subscription.push(sub);


  }
  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
    // In case array of subscription
    for(let sub of this.subscription){
      sub.unsubscribe();
    }
  }
}
