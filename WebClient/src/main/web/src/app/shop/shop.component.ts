import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Book } from '../book';
import { Observable } from 'rxjs';
import { Cart } from '../cart';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})


export class ShopComponent implements OnInit {
 
  bookstore = [];
    
   userCartItems:number;
   userEmail:string;
   cartUser: string;

  constructor(private _service : RegistrationService, private _router:Router,
    private _httpClient :HttpClient, private _http :HttpClientModule ) { 
     // this.bookstore.user = "hi"; 
     // const bookstore = this.getAllBooks;
     this.userCartItems = this._service.userCartItems;
     this.userEmail = this._service.email;
     this.cartUser = this._service.email;
     this.getAllBooks();
    
    }
    
  ngOnInit(): void {
    //this.records = ['a','b','c'];
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

  getAllBooks(){ 
  //   this.bookstore = [
  //     {
  //         "id": 1,
  //         "user": "sam@gmail.com",
  //         "title": "aa",
  //         "authors": "a",
  //         "publications": "public",
  //         "price": 120.0,
  //         "quantity": 0,
  //         "isbn": 0
  //     },
  //     {
  //         "id": 2,
  //         "user": "saam@gmail.com",
  //         "title": "bb",
  //         "authors": "b",
  //         "publications": "public",
  //         "price": 120.0,
  //         "quantity": 0,
  //         "isbn": 0
  //     }
  // ];

    this._service.getAllBooksFromRemote().subscribe(v => {
       this.bookstore = [
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
     this.bookstore = v;
     });
  }

  addToCart(book:Book){
    const bk = new Cart();
    bk.bookOwner = book.user;
    bk.user = this.cartUser;
    bk.title = book.title;
    bk.quantity = book.quantity;
    bk.publication = book.publication;
    bk.price = book.price;
    bk.isbn = book.isbn;
    bk.authors = book.authors;
    
   // book.user = this.cartUser;
    this.userCartItems = this.userCartItems + 1;
    this._service.userCartItems = this.userCartItems;

    this._service.addToCart(bk).subscribe(v => {
      alert('Added Book To Cart');
    });
   // this._service.addToCart(book);
  }

  updateBook(book:Book){
    this._service.updateBook.isbn = book.isbn;
    this._service.updateBook = book;


    this._service.canShowUpdateButton(true);
    console.log(this._service.updateBook);
    this._router.navigate(["updateBook"]);
  }

  viewBookDetails(book:Book){
    this._service.updateBook.isbn = book.isbn;
    this._service.updateBook = book;



    console.log(this._service.updateBook);
    this._service.canShowUpdateButton(false);
    this._router.navigate(["updateBook"]);
  }

  deleteBook(book:Book){
    //alert(book.isbn);
    if (confirm(" Deleting the book will remove the book from the customers Carts also. Are you sure, you want to delete?")) {
      this._service.deleteBook(book).subscribe(v => {
        alert('Book deleted from store sucessfully'); 
      });
    } 
    else {
     return;
    } 
  }

  seeImages(book:Book){
    
  }
  


}
