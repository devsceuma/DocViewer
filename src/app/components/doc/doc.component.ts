import {Component, OnInit,trigger,state,style,transition,animate,keyframes} from '@angular/core'
import {Router, ActivatedRoute } from '@angular/router';
import {LoginService} from './../../service/LoginService';
import {User} from './../../models/User';

@Component({
    selector: 'doc',
    templateUrl: './doc.html',
    styleUrls:['./style_layout.css'],
    providers:[LoginService]
})
export class DocComponent implements OnInit{

    user:User;

    constructor(private router: Router, private _loginService:LoginService) { }

    ngOnInit(){
        if(localStorage.getItem("currentUser") != null){
            this.user = new User(JSON.parse(localStorage.getItem("currentUser")));
        }else{
            this.router.navigate(['']);
        }
    }

    deslogar(){
        this._loginService.signout();
    }
}