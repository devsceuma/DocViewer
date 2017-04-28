import {Component,OnInit} from '@angular/core';
import {UserService} from './../../service/UserService';
import {Observable} from 'rxjs/Observable';
import {User} from './../../models/User';
import 'rxjs/add/operator/catch';

import 'rxjs/add/operator/catch';
@Component({
    selector:'register-use-admin-form',
    templateUrl:'./register-use.html',
    styleUrls:['./../../../assets/css/light-bootstrap-dashboard.css','./../../../assets/css/demo.css'],
    providers:[UserService]
})
export class RegisterUserComponent implements OnInit{
    message = {message:'',severity:''}
    constructor(private _userService:UserService){}

    ngOnInit(){
        
    }

    registerUser(form:any){
        if(form.confirmPassword != form.password){
            this.atualizarAlert("As senhas precisam coincidir","alert-danger")
        }else{
            this._userService.addUser(new User(form)).subscribe(
                data=>{console.log(data)},
                error=>{this.atualizarAlert(error,"alert-danger")},
                ()=>{this.atualizarAlert("Usuário inserido com sucesso !","alert-info")}
            )
        }
    }

    atualizarAlert(mensagem:string, severity:string){
            this.message.message = mensagem;
            this.message.severity=severity;
    }
}