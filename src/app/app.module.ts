import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';

import { authInterceptorProvider } from './_helpers/auth.interceptor';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    ProductComponent,
    CartComponent,
    ContactComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    ProductdetailComponent,
    BoardUserComponent,
    BoardAdminComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'product', component: ProductComponent},
      {path: 'cart', component: CartComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'productdetail', component: ProductdetailComponent},
      {path: 'user', component: BoardUserComponent},
      {path: 'admin', component: BoardAdminComponent},
  
      {path: '**', component: PagenotfoundComponent }
    ])
  ],
  providers: [authInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule { }
