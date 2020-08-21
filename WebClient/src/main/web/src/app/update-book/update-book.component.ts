import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Book } from '../book';
import { format } from 'path';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {
  book = new Book();
  ubISBN:string= '';
  ubtitle:string='';
  ubauthors:string='';
  ubpublication:string='';
  ubprice:string='';
  ubquantity:number;
  ubImages: string;
  selectedImage: File[] = [];
  imageURL =[]//"https://dummyimage.com/50x50/55595c/fff";

  userCartItems:number;
  userEmail:string;

  showUpdateButton: boolean;


 constructor(private _service : RegistrationService, private _router:Router,
   private _httpClient :HttpClient, private _http :HttpClientModule ) {

     this.userCartItems = this._service.userCartItems;
     this.userEmail = this._service.email;

     this.ubISBN = this._service.updateBook.isbn;
     this.ubtitle = this._service.updateBook.title;
     this.ubauthors = this._service.updateBook.authors;
     this.ubprice = this._service.updateBook.price;
     //this.ubpublication = this._service.updateBook.publication;
     this.ubquantity = this._service.updateBook.quantity;
     this.book.imageURL = this._service.updateBook.imageURL;
     //this.fetchImages(this.book.imageURL);
     this.showUpdateButton = this._service.showUpdateButton;
     this.getmages(this._service.updateBook.user,this._service.updateBook.isbn);

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

 updateBook(){
   this.book.isbn = this.ubISBN;
   this.book.authors = this.ubauthors;
   this.book.quantity = ( this.ubquantity);
  // this.book.publication= moment().startOf('week').toDate();
   this.book.price = this.ubprice;
   this.book.title = this.ubtitle;
   this.book.user = this.userEmail;


   this._service.updateBookFromRemote(this.book).subscribe(v => {

    const fd = new FormData();
    for(var y=0;y<this.selectedImage.length;y++){
      if(this.selectedImage[y] != undefined){
        fd.append('imageFile', this.selectedImage[y]);
        fd.append('bookISBN',this.book.isbn);
        fd.append('bookOwner',this.book.user);
        this._service.saveImage(fd).subscribe(v => { console.log(v);});
      }

    }

    alert('Updated Book To The Store Succesfully');

   });
 }

 fetchImages(images: String){
  this._service.getUsersImages(images).subscribe(v => {
    console.log(v);
    for(var i=0;i<v.length;i++){
     // this.imageURL.push(v.Image);
      this.imageURL.push(v[i]);
    }
  });
}

 deleteImage(i:number){
   if(this.showUpdateButton){
    console.log(this.imageURL);
    this._service.deleteImage(this.ubISBN,this.userEmail,this.book.imageURL,i).subscribe(v => {
      this.imageURL.splice(i,1);
      this.selectedImage.splice(i,1);
      alert("Deleted image & updated book successfully");
    });
   }

 }

 onFileSelected(event){
  console.log(event);
  if(event.target.files){
    for(var i=0;i<File.length;i++){
      var reader = new FileReader();
      this.selectedImage.push(event.target.files[i]);
      reader.readAsDataURL(event.target.files[i]);
      reader.onload = (event: any) => {
        this.imageURL.push(event.target.result);
      }
    }
    //this.selectedImage = event.target.files[0];
    //var reader = new FileReader();
    //reader.readAsDataURL(this.selectedImage);
    //reader.onload = (event: any) => {
    //  this.imageURL.push(event.target.result);
    //}
  }

}

getmages(user :String,isbn :String){
  this._service.getImagesOfUser(user,"",isbn).subscribe(v => {
    for(var i=0;i<v.length;i++){
      // this.imageURL.push(v.Image);
       this.imageURL.push(v[i]);
     }
  });
}

}
