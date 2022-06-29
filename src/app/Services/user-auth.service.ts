import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
private isUserLoggedSubject:BehaviorSubject<boolean>;
  constructor() { 
    this.isUserLoggedSubject=new BehaviorSubject<boolean>(this.isUserLogged);
  }

  login(userEmail:string,password:string) {
    let userToken='2510123456';
    localStorage.setItem("token",userToken);
    this.isUserLoggedSubject.next(true);

  }
  logout(){
    localStorage.removeItem("token");
    this.isUserLoggedSubject.next(false);

  }

  // readonly property
  get isUserLogged(){
    return (localStorage.getItem('token'))?true:false;
  }

  // getLoggedStatus(){
  //   return this.isUserLoggedSubject;
  // }
   getLoggedStatus():Observable<boolean> {
    return this.isUserLoggedSubject.asObservable();
  }
}
