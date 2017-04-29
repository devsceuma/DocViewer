import {Component,OnInit} from '@angular/core';
import {UserService} from './../../../service/UserService';
import {Observable} from 'rxjs/Observable';
import {User} from './../../../models/User';
import 'rxjs/add/operator/catch';

import 'rxjs/add/operator/catch';
@Component({
    selector:'register-use-admin-form',
    templateUrl:'./register-use.html',
    styleUrls:['./../../../../assets/css/light-bootstrap-dashboard.css','./../../../../assets/css/demo.css'],
    providers:[UserService]
})
export class RegisterUserComponent implements OnInit{
    message = {message:'',severity:''}
    messages = [{message:'',severity:''}]
    constructor(private _userService:UserService){}

    ngOnInit(){
        
    }

    registerUser(form:any){
        if(this.validationSuccessfully(form)){
             this._userService.addUser(new User(form)).subscribe(
                data=>{console.log(data)},
                error=>{this.atualizarAlert(error,"alert-danger")},
                ()=>{
                     this.messages = [];
                     this.messages.push({message:'Usuário inserido com sucesso :)',severity:'alert-info'})
                }
            )
        }
    }

    validationSuccessfully(form:any){
        let validated:boolean = true;
        this.messages = [];
        if((form.confirmPassword != form.password) && (form.password != '' && form.confirmPassword != '')){
            this.messages.push({message:'As senhas digitadas são diferentes, por favor verifique',severity:'alert-danger'})
            validated = false;
        }if(typeof form.username == 'undefined' || form.username == ''){
            this.messages.push({message:'O campo \'Username\' é obrigatório, por favor verifique',severity:'alert-danger'})
            validated = false;
        }if(typeof form.password == 'undefined' || form.password == ''){
            this.messages.push({message:'O campo \'Senha\' é obrigatório, por favor verifique',severity:'alert-danger'})
            validated = false;
        }if(typeof form.confirmPassword == 'undefined' || form.confirmPassword == ''){
            this.messages.push({message:'Você precisa confirmar sua senha no campo \'Digite a senha novamente\', por favor verifique',severity:'alert-danger'})
            validated = false;
        }
        return validated;
    }

    atualizarAlert(mensagem:string, severity:string){
            this.message.message = mensagem;
            this.message.severity=severity;
    }
}