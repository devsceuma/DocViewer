import {Component, OnInit} from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import {User} from './../../models/User';

@Component({
    selector: 'doc',
    templateUrl: './doc.html'
})
export class DocComponent implements OnInit{

    user:User;

    constructor(
        private router: Router) { }

    ngOnInit(){
        if(localStorage.getItem("currentUser") != null){
            this.user = new User(JSON.parse(localStorage.getItem("currentUser")));
        }else{
            this.router.navigate(['']);
        }
    }
}