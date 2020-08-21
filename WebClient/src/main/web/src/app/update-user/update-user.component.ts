import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  user = new User();
  uemail: string ='';
  upwd: string ='';
  ufname: string ='';
  ulname: string ='';
  uconfirmpwd: string='';

  constructor(private _service : RegistrationService, private _router:Router,
    private _httpClient :HttpClient, private _http :HttpClientModule ) { 
      this.uemail = this._service.email;
    }

  ngOnInit(): void {
  }

  routeToRegisterUser(){
    console.log("register ");
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

  hasNumber(myString) {
    return /\d/.test(myString);
  }
  
  updateUser(){
    if(this.upwd != this.uconfirmpwd){
      alert('Given Paaswords dont match');
      return;
    }
     
    //  if(!this.rpwd.length ){
    //    alert('Enter a pwd with a number,a upperCase charecter and a special charector');
    //  }

    if(!this.hasNumber(this.upwd)){
      alert('Enter a pwd with a number,a upperCase charecter and a special charector');
    }
     
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
