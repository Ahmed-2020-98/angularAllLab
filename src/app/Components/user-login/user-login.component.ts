import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  isuserLogged:boolean = false;
  constructor(private userauth: UserAuthService) { }

  ngOnInit(): void {
    this.isuserLogged=this.userauth.isUserLogged;
  }

  userLogin(){
    this.userauth.login('UserEmail','Password');
    this.isuserLogged=this.userauth.isUserLogged;


  }
  userLogout(){
    this.userauth.logout();
    this.isuserLogged=this.userauth.isUserLogged;

  }

}
