import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import {  Router} from '@angular/router' 
@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {
  user = new User();
 
  email: string ='';
  pwd: string ='';
  fname:string='';
  lname:string='';
  constructor(private _service : RegistrationService, private _router:Router) { 
    console.log('reached login constructor');
    
    if(localStorage.getItem('Loggedin User') != null){
       //$scope.data = JSON.parse(localStorage.getItem('sample_data'));
       this.logoutUser();
       localStorage.clear();
    }
  }

  ngOnInit(): void {
    console.log('reached ngOnInit');
  }

  hasNumber(myString) {
    const pattern = ('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}');
    
    return /\d/.test(myString);
  }
  
  logoutUser(){
    let sessionData = JSON.parse(localStorage.getItem('Loggedin User'));
    this._service.logoutUser(sessionData).subscribe(
      data =>   { },
      error => console.log("error")
    )
  }

  loginUser(){
    console.log("login");

    this.user.email = this.email;
    this.user.password = this.pwd;

    // if(!this.hasNumber(this.pwd)){
    //   alert('Enter a pwd with a number,a upperCase charecter and a special charector');
    //   return;
    // }

    result:String
    currentValue:String
    this._service.email = this.email;


    //localStorage.setItem("Loggedin User", JSON.stringify(this.email));
    //this._router.navigate(["home"]);
    //return;
    this._service.loginUserFromRemote(this.user).subscribe(
      
      data => 
      {console.log(data.emailId);

        if(data.emailId.includes('@') && data.emailId.endsWith('.com') ){
          localStorage.setItem("Loggedin User", JSON.stringify(this.user.email));
          this._router.navigate(["home"]);
        }
        else{
          alert(data.emailId);
          return;
        }
      },
      error => console.log("error")
    )
    return;
  }

  routeToRegisterUser(){
    this._router.navigate(["Register"]);
  }

  routeToForgotPwd(){
    this._router.navigate(["forgotPWD"]);
  }

}
