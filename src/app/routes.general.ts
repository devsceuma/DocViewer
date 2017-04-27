import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule, provideRoutes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {DocComponent} from './components/doc/doc.component';
const APP_ROUTES:Routes=[
    { path:'doc', component:DocComponent},
    { path:'', component:LoginComponent }
]

export const routing:ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);