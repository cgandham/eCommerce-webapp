import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { HomeComponent } from './home/home.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { SellComponent } from './sell/sell.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';


const routes: Routes = [
  {path:'',component:LoginUserComponent},
  {path:'Register',component: RegisterUserComponent},
  {path: 'home',component: HomeComponent},
  {path: 'update-user', component: UpdateUserComponent},
  {path: 'sell', component: SellComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'cart', component: CartComponent},
  {path: 'updateBook', component: UpdateBookComponent},
  {path: 'forgotPWD', component: ForgotPwdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
      
export class AppRoutingModule { }
