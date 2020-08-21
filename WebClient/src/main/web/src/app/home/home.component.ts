import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user = new User();
  uemail: string ='';
  upwd: string ='';
  ufname: string ='';
  ulname: string ='';
  userCartItems:number;
  userEmail:string;

  constructor(private _service : RegistrationService, private _router:Router,
    private _httpClient :HttpClient, private _http :HttpClientModule ) { 
      this._service.getCartItemsNo();
      this.userCartItems = this._service.userCartItems;
      this.userEmail = this._service.email;
    }

  ngOnInit(): void {
  }

  routeToRegisterUser(){
    this._router.navigate(["Register"]);
  }

  routeToUpdateUser(){
    this._router.navigate(["update-user"]);
  }

  routeToSell(){
    this._router.navigate(["sell"]);
  }

  routeToShop(){
    this._router.navigate(["shop"]);
  }

  routeToCart(){
    this._router.navigate(["cart"]);
  }
  

  updateUser(){
    console.log("update");
   // this._httpClient.post()

     
    this.user.email = this.uemail;
    this.user.fname = this.ufname;
    this.user.lname = this.ulname;
    this.user.password = this.upwd;
    this._service.updateUserFromRemote(this.user).subscribe(v => {
      console.log(v.firstname);
      alert("Updated");
    });
  }

}
