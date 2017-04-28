import {Service} from './Service';
import {Injectable} from '@angular/core';
import {URLSearchParams, Http,Response} from '@angular/http';
import {User} from './../models/User';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService extends Service{

    constructor(_http:Http){
        super(_http);
    }

    addUser(user:User):Observable<User>{
        return this.post('user-api/save',user);
    }

    loadUsers(){

        let users:User[] = [];
        this.get('user-api/findAllUsers','').subscribe(response=>{
            response.map((user:User)=>{
                users.push(new User(user));
            })
        });
        return users;

    }


}