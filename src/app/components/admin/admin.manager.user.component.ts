import {Component, OnInit} from '@angular/core';
import {UserService} from './../../service/UserService';
import {User} from './../../models/User';

@Component({
    selector: 'manager-user-form',
    templateUrl:'./manager-user.html',
    styleUrls:['./../../../assets/css/app.css'],
    providers:[UserService]
})
export class ManagerUserComponent implements OnInit{

    rows:User[] = []; 
    selected:any = [{name:''}];

    columns = [
        { prop: 'name',name:'Nome' },
        { prop: 'username',name:'Usuário' },
        { prop: 'email',name:'E-mail' },
        { prop: 'organization',name:'Empresa'},
        { prop: 'job',name:'Cargo'}
     ];
    constructor(private _userService:UserService){

    }

    ngOnInit(){
        console.log("Startou !!!");
        let users:User[] = this._userService.loadUsers();
        this.rows = users;
    }

    getAllUsers(){
        this._userService.loadUsers();
    }

    onSelect(selected:any) {
        this.selected.name = selected.selected[0].name;
    }

    onActivate(event:any) {
        console.log('Activate Event', event);
    }
}