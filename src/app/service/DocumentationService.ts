import {Service} from './Service';
import {Injectable} from '@angular/core';
import {URLSearchParams, Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Project} from './../models/Project';

@Injectable()
export class DocumentationService extends Service{

    constructor(_http:Http){
        super(_http);
    }


    getDoc(project:Project):Observable<any>{
        return this.getDocumentation(project.url);
    }

}