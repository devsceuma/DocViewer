import {Service} from './Service';
import {Injectable} from '@angular/core';
import {URLSearchParams, Http,Response} from '@angular/http';
import {User} from './../models/User';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService extends Service{

    constructor(_http:Http){
        super(_http);
    }

    addUser(user:User):Observable<Response>{
        debugger;
        return this.post('user-api/save',user);
    }


}