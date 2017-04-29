import {Component, OnInit} from '@angular/core';
import {UserService} from './../../../service/UserService';
import {User} from './../../../models/User';

@Component({
    selector: 'manager-user-form',
    templateUrl:'./manager-user.html',
    styleUrls:['./../../../../assets/css/light-bootstrap-dashboard.css','./../../../../assets/css/demo.css'],
    providers:[UserService]
})
export class ManagerUserComponent implements OnInit{

    rows:User[] = [];
    userSelected:User;
    message = {message:'',severity:''}
    public sortOrder = "asc"; 
    showDetail:boolean = false;

    constructor(private _userService:UserService){

    }

    ngOnInit(){
        this.rows = this._userService.loadUsers();
    }

    getUserDetail(user:User){
        this.showDetail = true;
        this.userSelected = user;
    }

    removeUser(user:User){
         this.atualizarAlert('Deletando usuário...',"alert-info")
         this._userService.deleteUser(user).subscribe(
                data=>{},
                error=>{this.atualizarAlert(error,"alert-danger")},
                ()=>{
                    this.atualizarAlert('Usuário '+user.name+' deletado com sucesso !',"alert-info")
                    this.rows.splice(this.rows.indexOf(user),1);
                }
            )
    }

    updateUser(form:any){
        form.username = this.userSelected.username;
        form.id = this.userSelected.id;
        this.atualizarAlert('Atualizando usuário...',"alert-info")
        this._userService.updateUser(new User(form)).subscribe(
                data=>{},
                error=>{this.atualizarAlert(error,"alert-danger")},
                ()=>{
                    this.atualizarAlert('Usuário '+form.name+' atualizado com sucesso !',"alert-info")
                    this.rows = this._userService.loadUsers();
                }
            )
    }

    atualizarAlert(mensagem:string, severity:string){
         this.message.message = mensagem;
         this.message.severity=severity;
    }
}