import {Service} from './Service';
import {Injectable} from '@angular/core';
import {URLSearchParams, Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Project} from './../models/Project';

@Injectable()
export class ProjectService extends Service{

    constructor(_http:Http){
        super(_http);
    }


    saveProject(project:Project):Observable<Project>{
        return this.post('project-api/save',project);
    }

    loadProjects():Project[]{
        let projects:Project[] = [];
        this.get('project-api/findAllProjects','').subscribe(response=>{
            response.map((project:Project)=>{
                projects.push(new Project(project));
            })
        });
        return projects
    }


}