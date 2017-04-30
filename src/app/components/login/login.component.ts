import { Component,OnInit} from '@angular/core';
import {animate, style, state, transition, trigger,keyframes} from '@angular/animations';
import {Router} from '@angular/router';
import {LoginService} from './../../service/LoginService';


@Component({
    selector:'login',
    templateUrl:`./login.html`,
    styleUrls:['./login.css'],
    providers:[LoginService],
    animations:[
        trigger("feedBackMessageTrigger",[
            state("disabled",style({opacity:0})),
            state("enabled",style({opacity:1})),
            transition("disabled => enabled",animate("300ms ease-in")),
            transition("enabled => disabled",animate("300ms ease-out"))
        ])
    ]
})
export class LoginComponent implements OnInit{
    message = {message:'',severity:''}
    credentials = {user:"",pwd:""}
    private autenticate = true;

    feedbackMessage:string = "disabled";

    constructor(private _loginService:LoginService, private _router:Router){

    }

    ngOnInit(){
        this._loginService.signout();
    }


    logar(){
        if(this.autenticate){
            if(this.credentials.user == "" || this.credentials.pwd == ""){
                this.atualizarAlert('Digite os campos de usuário e senha','alert-danger','enabled');
            }else{
                    this._loginService.signin(this.credentials.user,this.credentials.pwd).subscribe(data=>{
                    this._router.navigate(['doc']);
                    this.atualizarAlert('','','disabled');            
                },error=>{
                    this.atualizarAlert('Usuário ou senha incorreta','alert-danger','enabled');
                });

            }
        }else{
             this._router.navigate(['doc']);
        }
    }

    atualizarAlert(mensagem:string, severity:string, state:string){
            this.feedbackMessage = state;
            this.message.message = mensagem;
            this.message.severity=severity;
    }

}