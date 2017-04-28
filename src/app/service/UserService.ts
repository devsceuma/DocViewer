import {Service} from './Service';
import {Injectable} from '@angular/core';
import {URLSearchParams, Http,Response} from '@angular/http';
import {User} from './../models/User';

@Injectable()
export class UserService extends Service{

    constructor(_http:Http){
        super(_http);
    }

    addUser(user:User):any{
        return this.post('user-api/save',JSON.stringify(user)).subscribe((response:Response)=>{
           let user = response.json();
           console.log(user);
        });
    }


}