import {Component, OnInit} from '@angular/core';
import {Project} from './../../../models/Project';
import {ProjectService} from './../../../service/ProjectService';

@Component({
    selector:'project-component',
    templateUrl:'./project.html',
    styleUrls:['./../../../../assets/css/light-bootstrap-dashboard.css','./../../../../assets/css/demo.css'],
    providers: [ProjectService]
})
export class ProjectComponent implements OnInit{

    message = {message:'',severity:''}
    projects:Project[] = [];

    constructor(private _projectService:ProjectService){}

    ngOnInit(){
        this.projects = this._projectService.loadProjects();
    }

    saveProject(form:any){
        if(form.name === "" || typeof form.name == 'undefined'){
            this.atualizarAlert('O campo \'Nome do Projeto\' é obrigatório','alert-danger')
        }else if(form.url === "" || typeof form.url == 'undefined'){
            this.atualizarAlert('O campo \'URL Master\' é obrigatório','alert-danger')
        }
        else{
            let project = new Project(form);
            this._projectService.saveProject(project).subscribe(
                data=>{},
                error=>{this.atualizarAlert(error,'alert-danger')},
                ()=>{
                    this.atualizarAlert('Projeto salvo com sucesso','alert-info');
                    this.projects.push(project);
                }
            )
        }
    }

    atualizarAlert(mensagem:string, severity:string){
         this.message.message = mensagem;
         this.message.severity=severity;
    }

}