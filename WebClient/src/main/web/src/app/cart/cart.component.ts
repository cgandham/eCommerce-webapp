import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Book } from '../book';
import { Cart } from '../cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  usersCart = [];
  user = new User();
  uemail: string ='';
  upwd: string ='';
  ufname: string ='';
  ulname: string ='';
  userCartItems:number;
  userEmail:string;

  
  
  constructor(private _service : RegistrationService, private _router:Router,
    private _httpClient :HttpClient, private _http :HttpClientModule ) { 
      this.userEmail = this._service.email;
      this.getUsersCart();
      this.userCartItems = this._service.userCartItems;
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
  
  routeToHome(){
    this._router.navigate(["home"]);
  }

  getUsersCart(){ 
    this._service.getUsersCart(this.userEmail).subscribe(v => {
      this.usersCart = [
        {
            "id": 1,
            "user": "sam@gmail.com",
            "title": "aa",
            "authors": "a",
            "publications": "public",
            "price": 120.0,
            "quantity": 0,
            "isbn": 0
        }
    ];
     this.usersCart = v;
    console.log(v);
    });

  }

  deleteBookFromCart(book:Cart){
    if (confirm("Are you sure, you want to delete?")) {
      const bk = new Cart();
      
      bk.bookOwner = book.bookOwner;
      bk.user = this._service.email;
      bk.title = book.title;
      bk.quantity = book.quantity;
      bk.publication = book.publication;
      bk.price = book.price;
      bk.isbn = book.isbn;
      bk.authors = book.authors;
      
      this._service.deleteBookFromCart(book).subscribe(v => {
        alert('Book deleted from store sucessfully'); 
      });
    } 
    else {
     return;
    } 
  }
  
  

}
