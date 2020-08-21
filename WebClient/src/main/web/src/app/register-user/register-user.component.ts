import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  user = new User();

  remail: string ='';
  rpwd: string ='';
  rconfirmpwd: String='';
  fname: string ='';
  lname: string ='';
  //pattern: RegExp = "^[a-zA-Z0-9\\.;,:' ]{1,100}$";
  constructor(private _service : RegistrationService) { }

  ngOnInit(): void {
  }

  hasNumber(myString) {
    return /\d/.test(myString);
  }

  registerUser(){
    console.log("register");

    if(!this.remail.includes('@')){
      alert('Invalid Email Address.Please Enter correct one');
      return;
    }

    // if(this.remail.substring(this.remail.indexOf("@")+1,this.remail.indexOf(".com")).length == 0){
    //   alert('Invalid Email Address.Please Enter correct one');
    //   return;
    // }
  //   var p = new RegExp("^[a-zA-Z0-9\\.;,:' ]{1,100}$");
  //   if(!p.test(this.rpwd)) {
  //     alert("Edgsdgdsgsgtor");
  //     return;
  // }

    if(this.rpwd != this.rconfirmpwd){
      alert('Given Paaswords dont match');
      return;
    }

    if(this.rpwd.length < 8 ){
        alert('Enter a pwd with minimum of 8 charectors');
        return;
      }

    if(!this.hasNumber(this.rpwd)){
      alert('Enter a pwd with a number,a upperCase charecter and a special charector');
      return;
    }

    var pattern = new RegExp(/[~`!#@$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/); //acceptable chars
    if(!pattern.test(this.rpwd)) {
        alert("Enter a pwd with a number,a upperCase charecter and a special charector");
        return;
    }

    if(!this.rpwd.match(".*[A-Z].*")){
      alert("Enter a pwd with a number,a upperCase charecter and a special charector");
      return;
    }

    if(this.fname == "" || this.lname == ""){
      alert('Enter All Details of the User');
      return;
     }

    this.user.email = this.remail;
    this.user.fname = this.fname;
    this.user.lname = this.lname;
    this.user.password = this.rpwd;
    this._service.registerUserFromRemote(this.user).subscribe(v => {
      //console.log(v);
      alert('Registered User Succesfully');
    });
  }

}
