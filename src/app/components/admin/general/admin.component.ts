import {Component,OnInit,Injectable} from '@angular/core';
import {User} from './../../../models/User';
import {LoginService} from './../../../service/LoginService';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:'admin-panel',
    templateUrl:'./admin.html',
    styleUrls:['./../../../../assets/css/light-bootstrap-dashboard.css','./../../../../assets/css/demo.css'],
    providers:[LoginService]
})
export class AdminComponent implements OnInit{

    user:User;

    constructor(private _router:Router, private _userService:LoginService){

    }

    ngOnInit(){
        if(localStorage.getItem("currentUser") != null){
            this.user = new User(JSON.parse(localStorage.getItem("currentUser")));
        }else{
            this._router.navigate(['']);
        }
    }

    logout(){
        this._userService.signout();
    }
}