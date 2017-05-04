import {Component,OnInit,Injectable} from '@angular/core';
import {User} from './../../../models/User';
import {LoginService} from './../../../service/LoginService';
import { Router, ActivatedRoute} from '@angular/router';
import {AuthGuard} from './../../../auth.guard';

@Component({
    selector:'admin-panel',
    templateUrl:'./admin.html',
    styleUrls:['./../../../../assets/css/light-bootstrap-dashboard.css','./../../../../assets/css/demo.css'],
    providers:[LoginService]
})
export class AdminComponent implements OnInit{

    user:User;
    private returnUrl:string;

    constructor(private _router:Router, private _userService:LoginService, private _authGuard:AuthGuard){}

    ngOnInit(){
        if(!this._authGuard.enableAuth){
            this.user = new User(this._authGuard.userGenerated);
        }else{
            this.user = new User(JSON.parse(localStorage.getItem("currentUser")));
        }
    }

    logout(){
        this._userService.signout();
    }
}