import {Component,OnInit,Injectable} from '@angular/core';
import {User} from './../../../models/User';
import {LoginService} from './../../../service/LoginService';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:'admin-panel',
    templateUrl:'./admin.html',
    styleUrls:['./../../../../assets/css/light-bootstrap-dashboard.css','./../../../../assets/css/demo.css'],
    providers:[LoginService]
})
export class AdminComponent implements OnInit{

    user:User;
    private autenticateAdmin:boolean = false;
    
    private userGenerated={id:"5904c8c2eedce401888056ce",
            name:"Marcus Vinicius Cartagenes",
            username:"marcus",
            password:"202cb962ac59075b964b07152d234b70",
            email:"mvcartagenes@gmail.com",
            organization:"Universidade Ceuma",
            job:"Desenvolvedor de Sistemas",
            projects:[{"id":"59049fddeedce43b1645b591",
            url:"www.ceuma.br/ServicosOnline",
            name:"ServicosOnline"}],
            profile:"AD"};

    constructor(private _router:Router, private _userService:LoginService){

    }

    ngOnInit(){
      this.validateSession();
    }

    private validateSession(){
        if(this.autenticateAdmin){
            if(localStorage.getItem("currentUser") != null){
                this.user = new User(JSON.parse(localStorage.getItem("currentUser")));
                if(this.user.profile != 'AD'){
                    this._router.navigate(['']);
                }
            }else{
                this._router.navigate(['']);
            }
        }else{
            this.user = new User(this.userGenerated);
        }
    }

    logout(){
        this._userService.signout();
    }
}