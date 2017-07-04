import {Component,OnInit} from '@angular/core';
import {UserService} from './../../../service/UserService';
import {Observable} from 'rxjs/Observable';
import {User} from './../../../models/User';
import 'rxjs/add/operator/catch';
import {Message} from 'primeng/primeng';

import 'rxjs/add/operator/catch';
@Component({
    selector:'register-use-admin-form',
    templateUrl:'./register-use.html',
    styleUrls:['./../../../../assets/css/light-bootstrap-dashboard.css','./../../../../assets/css/demo.css'],
    providers:[UserService]
})
export class RegisterUserComponent implements OnInit{
    msgs:Message[] = []
    constructor(private _userService:UserService){}

    ngOnInit(){
        
    }

    registerUser(form:any){
        if(this.validationSuccessfully(form)){
             this._userService.addUser(new User(form)).subscribe(
                data=>{console.log(new User(form))},
                error=>{this.msgs.push({summary:'Erro interno x.x',detail:error,severity:'error'})},
                ()=>{
                     this.msgs = [];
                     this.msgs.push({summary:"Atenção",detail:'Usuário inserido com sucesso :)',severity:'info'})
                }
            )
        }
    }

    validationSuccessfully(form:any){
        let validated:boolean = true;
        this.msgs = [];
        if((form.confirmPassword != form.password) && (form.password != '' && form.confirmPassword != '')){
            this.msgs.push({summary:"Erro de validação",detail:'As senhas digitadas são diferentes, por favor verifique',severity:'error'})
            validated = false;
        }if(typeof form.username == 'undefined' || form.username == ''){
            this.msgs.push({summary:"Erro de validação",detail:'O campo \'Username\' é obrigatório, por favor verifique',severity:'error'})
            validated = false;
        }if(typeof form.password == 'undefined' || form.password == ''){
            this.msgs.push({summary:"Erro de validação",detail:'O campo \'Senha\' é obrigatório, por favor verifique',severity:'error'})
            validated = false;
        }if(typeof form.confirmPassword == 'undefined' || form.confirmPassword == ''){
            this.msgs.push({summary:"Erro de validação",detail:'Você precisa confirmar sua senha no campo \'Digite a senha novamente\', por favor verifique',severity:'error'})
            validated = false;
        }
        return validated;
    }

}