import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isuserLogged:boolean;
  constructor(private userauth:UserAuthService) { 
    this.isuserLogged=this.userauth.isUserLogged;
    // console.log(this.isuserLogged);
    
  }

  ngOnInit(): void {

    // this.isuserLogged=this.userauth.isUserLogged;
    this.userauth.getLoggedStatus().subscribe(status => {
      // true or false
      this.isuserLogged=status;
      console.log(this.isuserLogged);
      
    })
  }

}
