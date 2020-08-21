import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { SellComponent } from './sell/sell.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UpdateUserBookComponent } from './update-user-book/update-user-book.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
//import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    LoginUserComponent,
    HomeComponent,
    UpdateUserComponent,
    CartComponent,
    ShopComponent,
    SellComponent,
    UpdateBookComponent,
    UpdateUserBookComponent,
    ForgotPwdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    //HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
