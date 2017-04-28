import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule, provideRoutes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {DocComponent} from './components/doc/doc.component';
import {AdminComponent} from './components/admin/admin.component';
import {RegisterUseComponent} from './components/admin/admin.register.user.component';
const APP_ROUTES:Routes=[
    { path:'doc', component:DocComponent},
    { path:'admin',component:AdminComponent},
    { path:'admin/adduser',component:RegisterUseComponent},
    { path:'', component:LoginComponent }
]

export const routing:ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);