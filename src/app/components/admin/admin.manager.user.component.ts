import {Component, OnInit} from '@angular/core';
import {UserService} from './../../service/UserService';

@Component({
    selector: 'manager-user-form',
    template:`   
    <div>
      <ngx-datatable
        [rows]="rows"
        [columns]="columns">
      </ngx-datatable>
    </div>`
})
export class ManagerUserComponent implements OnInit{

     rows = [
        { name: 'Austin', gender: 'Male', company: 'Swimlane' },
        { name: 'Dany', gender: 'Male', company: 'KFC' },
        { name: 'Molly', gender: 'Female', company: 'Burger King' },
    ];
    columns = [
        { prop: 'name' },
        { name: 'Gender' },
        { name: 'Company' }
     ];
    constructor(private _userService:UserService){

    }

    ngOnInit(){
        console.log("Startou !!!");
        this._userService.loadUsers();
    }

    getAllUsers(){
        this._userService.loadUsers();
    }
}