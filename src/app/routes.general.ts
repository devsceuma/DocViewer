import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule, provideRoutes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {DocComponent} from './components/doc/doc.component';
import {AdminComponent} from './components/admin/general/admin.component';
import {ProjectComponent} from './components/admin/project/admin.project.component';
import {ManagerUserComponent} from './components/admin/manager-user/admin.manager.user.component';
import {RegisterUserComponent} from './components/admin/register-user/admin.register.user.component';

const APP_ROUTES:Routes=[
    { path:'doc', component:DocComponent},
    { path:'admin', component:AdminComponent},
    { path:'', component:LoginComponent }
]

const ADMIN_ROUTES:Routes=[
    { path:'admin',component:AdminComponent,children:[
        {path:'add-user',component:RegisterUserComponent},
        {path:'manager-user',component:ManagerUserComponent},
        {path:'project',component:ProjectComponent}
    ]}
]

export const admin_routing:ModuleWithProviders = RouterModule.forChild(ADMIN_ROUTES);
export const routing:ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);