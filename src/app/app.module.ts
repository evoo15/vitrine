import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FullLayoutComponent } from './full-layout/full-layout.component';

import { WelcomeComponent } from './welcome/welcome.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {StorageService} from './shared/services/storage.service';
import {AppRoutingModule} from './app.routing';
import {ProductService} from './shared/services/product.service';
import {UserService} from './shared/services/user.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FullLayoutComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [StorageService,
  ProductService,
  UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
