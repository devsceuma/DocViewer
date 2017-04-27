import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './../../service/LoginService';


@Component({
    selector:'login',
    templateUrl:`./login.html`,
    styleUrls:['./login.css'],
    providers:[LoginService]
})
export class LoginComponent implements OnInit{
    message = {message:'',severity:''}
    credentials = {user:"",pwd:""}

    constructor(private _loginService:LoginService, private _router:Router){

    }

    ngOnInit(){
        this._loginService.signout();
    }


    logar(){
        if(this.credentials.user == "" || this.credentials.pwd == ""){
            this.atualizarAlert('Digite os campos de usuário e senha','alert-danger');
        }else{
            this._loginService.signin(this.credentials.user,this.credentials.pwd).subscribe(data=>{
                console.log(localStorage.getItem("currentUser"))
                this._router.navigate(['doc']);
                this.atualizarAlert('','');            
            },error=>{
                this.atualizarAlert('Usuário ou senha incorreta','alert-danger');
        });

        }
    }

    atualizarAlert(mensagem:string, severity:string){
            this.message.message = mensagem;
            this.message.severity=severity;
    }

}