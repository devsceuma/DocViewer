import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule} from '@angular/http';
import { LoginComponent } from './components/login/login.component';
import { DocComponent } from './components/doc/doc.component';
import { AppComponent }  from './app.component';
import { RouterModule, Routes} from '@angular/router';
import {routing} from './routes.general';

@NgModule({
  imports:[ 
  BrowserModule,
  FormsModule, 
  HttpModule, 
  JsonpModule,
  routing],
  declarations: [AppComponent,LoginComponent,DocComponent],
  bootstrap:    [AppComponent]
})
export class AppModule { }
