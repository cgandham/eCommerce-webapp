import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Book } from '../book';
import { $ } from 'protractor';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})



export class SellComponent implements OnInit {
   book = new Book();
   sISBN:string='';
   stitle:string='';
   sauthors:string='';
   spublication:string='';
   sprice:string='';
   squantity:string='';

   userCartItems:number;
   userEmail:string;
   selectedImage: File[] = [];
   imageURL = []//"https://dummyimage.com/50x50/55595c/fff";
   link = "https://s3.amazonaws.com/webapp.firstname.lastname/1592403468227-book.jpeg"
    //imageURL = "data:image/jpeg;base64,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";
   files: File[] = null;

  constructor(private _service : RegistrationService, private _router:Router,
    private _httpClient :HttpClient, private _http :HttpClientModule ) { 
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
  routeToHome(){
    this._router.navigate(["home"]);
  }

  sellBook(){

     if(this.sprice != "0.1" && (parseInt(this.sprice) > 9999.99||parseInt(this.sprice) < 0.1)){
      alert('Max Price of 9999.99 and Min price of 0.1 is accepted');
      return;
    }

    if(parseInt(this.squantity) > 999 ||parseInt(this.squantity) <= 0){
       alert('Max Quantity of 999 and Min price of 1 is accepted');
       return;
     }

     if(this.stitle == "" || this.sauthors == "" || this.sprice == "" || this.squantity == "" || this.spublication == ""){
      alert('Enter All Details of the Book');
      return;
     }


    this.book.isbn = this.sISBN;
    this.book.authors = this.sauthors;
    this.book.quantity = parseInt( this.squantity);
    this.book.publication = this.spublication;
    this.book.price = this.sprice;
    this.book.title = this.stitle;
    this.book.user =  this.userEmail;
    this._service.sellBookFromRemote(this.book).subscribe(v => {
      const fd = new FormData();
     
      for(var y=0;y<this.selectedImage.length;y++){
        if(this.selectedImage[y] != undefined){
          const fd = new FormData();
          fd.append('imageFile', this.selectedImage[y]);
          fd.append('bookISBN',this.book.isbn);
          fd.append('bookOwner',this.book.user);
          this._service.saveImage(fd).subscribe(v => { console.log(v);}); 
        }
      }
     
      alert('Added Book To The Store Succesfully');
    });

    // const fd = new FormData();
    // for(var y=0;y<this.selectedImage.length;y++){
    //   fd.append('imageFile', this.selectedImage[y]);
    // }
    // fd.append('bookISBN',this.book.isbn);
    // fd.append('bookOwner',this.book.user);
    // this._service.saveImage(fd).subscribe(v => {console.log(v)});

    //  const fd1 = new FormData();
    //  for(var y=0;y<this.selectedImage.length;y++){
    //   fd1.append('File',this.selectedImage[y]);
    //  }
     
    //  fd1.append('bookISBN',this.book.isbn);
    //  fd1.append('bookOwner',this.book.user);
    //  this._service.saveImage1(fd1).subscribe(v => {console.log(v)});

  }

  onFileSelected(event){
    console.log(event);
    if(event.target.files){
      this.files = event.target.files;
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

}
