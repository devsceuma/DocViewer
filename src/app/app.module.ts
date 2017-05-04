import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import {DataTableModule} from 'angular2-datatable';
import { HttpModule, JsonpModule} from '@angular/http';
import { LoginComponent } from './components/login/login.component';
import { DocComponent } from './components/doc/doc.component';
import { AppComponent }  from './app.component';
import {MessagesModule,GrowlModule,AccordionModule,TabViewModule, PanelModule,InputTextModule} from 'primeng/primeng';
import {AdminComponent} from './components/admin/general/admin.component';
import {ProjectComponent} from './components/admin/project/admin.project.component';
import {RegisterUserComponent} from './components/admin/register-user/admin.register.user.component';
import {ManagerUserComponent} from './components/admin/manager-user/admin.manager.user.component';
import { RouterModule, Routes} from '@angular/router';
import {routing} from './routes.general';
import {AuthGuard} from './auth.guard';

@NgModule({
  imports:[
  DataTableModule,
  BrowserModule,
  BrowserAnimationsModule,
  InputTextModule,
  TabViewModule,
  FormsModule,
  GrowlModule,
  PanelModule, 
  HttpModule, 
  JsonpModule,
  MessagesModule,
  AccordionModule,
  routing],
  declarations: [
                  AppComponent,
                  LoginComponent,
                  DocComponent,
                  AdminComponent,
                  RegisterUserComponent,
                  ManagerUserComponent,
                  ProjectComponent
                ],
  providers:    [AuthGuard],
  bootstrap:    [AppComponent]
})
export class AppModule { }
