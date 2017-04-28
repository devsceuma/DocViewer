import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule, provideRoutes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {DocComponent} from './components/doc/doc.component';
import {AdminComponent} from './components/admin/admin.component';
import {ManagerUserComponent} from './components/admin/admin.manager.user.component';
import {RegisterUserComponent} from './components/admin/admin.register.user.component';

const APP_ROUTES:Routes=[
    { path:'doc', component:DocComponent},
    { path:'admin',component:AdminComponent,children:[
        {path:'add-user',component:RegisterUserComponent},
        {path:'manager-user',component:ManagerUserComponent}
    ]},
    { path:'', component:LoginComponent }
]

export const routing:ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);