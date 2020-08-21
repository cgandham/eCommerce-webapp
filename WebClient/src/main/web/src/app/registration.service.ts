import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Book } from './book';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  user = new User();
  email: string ='';
  pwd: string ='';
  fname: string ='';
  lname: string ='';
  userCartItems: number = 0;
  usersCart = [];

  updateBook = new Book();
  showUpdateButton: boolean;

  constructor(private _http : HttpClient) {

    this.userCartItems = 0;
    this.getCartItemsNo;
    this.getUsersCart(this.email);
   }

  public updateBookData(bk:Book){
    this.updateBook = bk;
  }

  public loginUserFromRemote(user:User):Observable<any>{
    console.log(user.email);
    console.log(user.password);

    value:String;
    //const value = this._http.post("/webapp/loginCheck?email="+user.email+"&pwd="+user.password,user);
    //alert(value);

   return this._http.post("/webapp/loginCheck?email="+user.email+"&pwd="+user.password,user);

  }

  public registerUserFromRemote(user:User):Observable<any>{
    const res = this._http.post("/webapp/addUser?fname="+user.fname+"&lname="+user.lname+
    "&email="+user.email+"&pwd="+user.password ,user);
    return res;

   }

   public updateUserFromRemote(user:User):Observable<any>{
    const res = this._http.post("/webapp/updateUser?fname="+user.fname+"&lname="+user.lname+
    "&email="+user.email+"&pwd="+user.password ,user);
    return res;

   }

   public getUserFromRemote(user:User):Observable<any>{
    const res = this._http.post("/webapp/getUser?email="+user.email ,user);
    return res;

   }

   public sellBookFromRemote(book:Book):Observable<any>{
    const res = this._http.post("/webapp/addBook" ,book);
    return res;

   }

   //make changes by owner
   public updateBookFromRemote(book:Book):Observable<any>{
    const res = this._http.post("/webapp/updateBook" ,book);
    return res;

   }

   public getAllBooksFromRemote():Observable<any>{
    const res = this._http.get("/webapp/getAllBooks");
    return res;

   }

   getAllBooks(){

    this.getAllBooksFromRemote().subscribe(v => {
      console.log(v.length);
      alert('got books');
    });
  }

  getUsersCart(email:string):Observable<any>{
    const res = this._http.post("/webapp/getUsersCart?email="+email,email);
    return res;

  }

  getCartItemsNo(){
    this.getUsersCart(this.email).subscribe(v => {
      console.log(v.length);
      this.userCartItems = v.length;
     // alert('got books');
    });
  }

  addToCart(book:Cart){
    return this._http.post("/webapp/addToCart",book);
  }

  //deletebook by owner
  deleteBook(book:Book){
    return this._http.post("/webapp/deleteBook",book);
  }

  //deletebook from cart
  deleteBookFromCart(book:Cart){
    return this._http.post("/webapp/deleteBookFromCart",book);
  }

  updateCart(book:Book){
    return this._http.post("/webapp/deleteFromUsersCart",book);
  }

  saveImage( fd: FormData){
    return this._http.post("/webapp/uploadImage",fd);
  }

  saveImage1( fd: FormData){
    return this._http.post("/webapp/uploadImage1",fd);
  }

  getUsersImages(url : String):Observable<any>{
    return this._http.post("/webapp/getImages?url="+url,url);
  }

  deleteImage(isbn : String, owner : String, url : String, i:number):Observable<any>{
    return this._http.post("/webapp/deleteImage?bookISBN="+isbn+"&bookOwner="+owner+"&index="+i+"&url="+url,url);
  }

  public canShowUpdateButton(bk:boolean){
    this.showUpdateButton = bk;
  }

  getImagesOfUser(user : String,owner : String,isbn : String):Observable<any>{
    return this._http.post("/webapp/getImagesOfUser?user="+user+"&isbn="+isbn,user);
  }

  logoutUser(user : String):Observable<any>{
    return this._http.post("/webapp/logoutUser?user="+user,user);
  }

  forgotPassword(email : String):Observable<any>{
    return this._http.post("/webapp/forgotPassword?email="+email,email);
  }

}
