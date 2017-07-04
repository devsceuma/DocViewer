import {Component, OnInit} from '@angular/core';
import {Project} from './../../../models/Project';
import {ProjectService} from './../../../service/ProjectService';
import {Message} from 'primeng/primeng';
import {AuthGuard} from './../../../auth.guard';

@Component({
    selector:'project-component',
    templateUrl:'./project.html',
    styleUrls:['./../../../../assets/css/light-bootstrap-dashboard.css','./../../../../assets/css/demo.css'],
    providers: [ProjectService]
})
export class ProjectComponent implements OnInit{

    msgs:Message[] = [];
    projects:Project[] = [];
    projectSelected:Project;
    mfSortOrder:string ='asc';

    constructor(private _projectService:ProjectService){}

    ngOnInit(){
        this.projects = this._projectService.loadProjects();
    }

    saveProject(form:any){
        if(form.name === "" || typeof form.name == 'undefined'){
            this.atualizarAlert('O campo \'Nome do Projeto\' é obrigatório','error')
        }else if(form.url === "" || typeof form.url == 'undefined'){
            this.atualizarAlert('O campo \'URL Master\' é obrigatório','error')
        }
        else{
            let project = new Project(form);
            this._projectService.saveProject(project).subscribe(
                data=>{},
                error=>{this.atualizarAlert(error,'error')},
                ()=>{
                    this.atualizarAlert('Projeto salvo com sucesso','info');
                    this.projects.push(project);
                }
            )
        }
    }

    getProjectDetails(event:any){
        this.msgs = [];
        this.projectSelected = new Project(event);
        this._projectService.updateProject(new Project(event))

    }

    updateProject(project:any){
        this._projectService.updateProject(this.projectSelected).subscribe(
            data=>{},
            error=>{this.atualizarAlert(error,'error')},
            ()=>{
                this.atualizarAlert('Projeto atualizado com sucesso !','info');
            }
        )
    }

    removeProject(project: Project) {
        this.atualizarAlert('Deletando projeto...', "info")
        this._projectService.deleteProject(project).subscribe(
            data => { },
            error => { this.atualizarAlert(error, "error") },
            () => {
                this.atualizarAlert('Projeto ' + project.name + ' deletado com sucesso !', "info")
                this.projects.splice(this.projects.indexOf(project), 1);
            }
        )
    }

    atualizarAlert(mensagem:string, severity:string){
        this.msgs = [];
        this.msgs.push({summary:'Atenção!',detail:mensagem,severity:severity});
    }

}