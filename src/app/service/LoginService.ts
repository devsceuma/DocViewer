import {Service} from './Service';
import {Injectable} from '@angular/core';
import {URLSearchParams, Http,Response} from '@angular/http';

@Injectable()
export class LoginService extends Service{

    constructor(_http:Http){
        super(_http);
    }

    signin(username:string,password:string){
        this.signout(); 

        let params = new URLSearchParams();
        params.set("username",username);
        params.set("password", password);

        return this.post('user-api/login',params).map((response:Response)=>{
           let user = response.json();
           if(user){
               localStorage.setItem("currentUser",JSON.stringify(user));
           }
        });

    }



    public signout(){
        if(typeof localStorage.getItem("currentUser") != 'undefined'){
            localStorage.removeItem("currentUser");
        }
    }
}