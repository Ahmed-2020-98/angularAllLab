import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {
// Declare array with type string
private adsList:string[];
  constructor() {
    this.adsList=[
      "Black Friday up to 50% offers",
      "White Friday offers",
      // "",
      "Big Discounts of Black Friday",
      "Special offers in our website"
    ];
   }

   // setInterval
  //  getScheduleAds(3000)
    getScheduleAds(intervalInSeconds:number):Observable<string>{
      // observer.next()
      // observer.error()
      // observer.complete()
      return new Observable<string>((observer)=>{
        // let adsTimer=setInterval(()=>{},timer)
        let counter=0;
        let adsTimer=setInterval(()=>{

          console.log("Inside interval");
          

          // Complete case
          if(counter==this.adsList.length)
          {
            observer.complete();
          }

          // Error case
          if(this.adsList[counter]=="")
          {
            observer.error("Error : Empty Ad");
          }


          // next case
          observer.next(this.adsList[counter]);
          counter++;

        },intervalInSeconds*1000);
        return{
          unsubscribe(){
            // will be called in three cases
            // error
            // complete
            // unsubscribe
            clearInterval(adsTimer);
            console.log("Observable is unsubscribed");
            
          }
        }

      });


    }


    getAllAds():Observable<string>{

      // return of("Ad1","Ad2","Ad3");
      return from(this.adsList);
    }
}
