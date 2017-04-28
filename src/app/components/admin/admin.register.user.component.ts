import {Component,OnInit} from '@angular/core';
import {UserService} from './../../service/UserService';
import {User} from './../../models/User';
@Component({
    selector:'register-use-admin-form',
    templateUrl:'./register-use.html',
    styleUrls:['./../../../assets/css/light-bootstrap-dashboard.css','./../../../assets/css/demo.css'],
    providers:[UserService]
})
export class RegisterUseComponent implements OnInit{
    constructor(private _userService:UserService){}

    ngOnInit(){
        
    }

    registerUser(form:any){
        if(form.confirmPassword != form.password){
            console.log("ERRADO !");
        }else{
            this._userService.addUser(new User(form));
        }
    }
}