import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'manager-user-form',
    templateUrl:'./manager-user.html'
})
export class ManagerUserComponent implements OnInit{

    constructor(){

    }

    ngOnInit(){
        console.log("Startou !!!");
    }
}