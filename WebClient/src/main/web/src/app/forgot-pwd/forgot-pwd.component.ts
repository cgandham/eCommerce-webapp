import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import {  Router} from '@angular/router'

@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.scss']
})
export class ForgotPwdComponent implements OnInit {
  user = new User();

  femail: string ='';
  pwd: string ='';
  fname:string='';
  lname:string='';

  constructor(private _service : RegistrationService) {

  }

  ngOnInit(): void {
  }

  verifyEmail(){
    this._service.forgotPassword(this.femail).subscribe(
      data =>   {  },
      error => console.log("error")
    )
    alert("If user exists,Reset Link will be sent!");
  }

}
