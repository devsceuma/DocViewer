import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule} from '@angular/http';
import { LoginComponent } from './components/login/login.component';
import { DocComponent } from './components/doc/doc.component';
import { AppComponent }  from './app.component';
import {AdminComponent} from './components/admin/admin.component';
import {RegisterUserComponent} from './components/admin/admin.register.user.component';
import {ManagerUserComponent} from './components/admin/admin.manager.user.component';
import { RouterModule, Routes} from '@angular/router';
import {routing} from './routes.general';

@NgModule({
  imports:[ 
  BrowserModule,
  FormsModule, 
  HttpModule, 
  JsonpModule,
  routing],
  declarations: [AppComponent,LoginComponent,DocComponent,AdminComponent,RegisterUserComponent,ManagerUserComponent],
  bootstrap:    [AppComponent]
})
export class AppModule { }
