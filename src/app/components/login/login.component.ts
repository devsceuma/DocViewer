import { Component,OnInit} from '@angular/core';
import {animate, style, state, transition, trigger,keyframes} from '@angular/animations';
import {Message} from 'primeng/primeng';
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
    private autenticate = true;
    private msgs: Message[] = []

    constructor(private _loginService:LoginService, private _router:Router){

    }

    ngOnInit(){
        this._loginService.signout();
    }


    logar(){
        if(this.autenticate){
            if(this.credentials.user == "" || this.credentials.pwd == ""){
                this.atualizarAlert('Digite os campos de usuário e senha','error','Erro de validação');
            }else{
                    this._loginService.signin(this.credentials.user,this.credentials.pwd).subscribe(data=>{
                    this._router.navigate(['doc']);
                    this.msgs = [];  
                },error=>{
                    this.atualizarAlert('Usuário ou senha incorreta','error','Erro de validação');
                });

            }
        }else{
             this._router.navigate(['doc']);
        }
    }

    atualizarAlert(mensagem:string, severity:string, title:string){
            this.msgs = [];
            this.msgs.push({severity:severity,summary:title,detail:mensagem})
    }

}