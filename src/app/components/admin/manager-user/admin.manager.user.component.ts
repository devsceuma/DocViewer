import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../service/UserService';
import { ProjectService } from './../../../service/ProjectService';
import { User } from './../../../models/User';
import {Message} from 'primeng/primeng';
import { Project } from './../../../models/Project';

@Component({
    selector: 'manager-user-form',
    templateUrl: './manager-user.html',
    styleUrls: ['./../../../../assets/css/light-bootstrap-dashboard.css', './../../../../assets/css/demo.css','./custom.css'],
    providers: [UserService, ProjectService]
})
export class ManagerUserComponent implements OnInit {

    private msgs:Message[] = [];
    private projects: Project[] = [];
    private rows: User[] = [];
    private userSelected: User;
    private sortOrder = "asc";

    constructor(private _userService: UserService, private _projectService: ProjectService) {

    }

    ngOnInit() {
        this.rows = this._userService.loadUsers();
        this.projects = this._projectService.loadProjects();
    }

    private getUserDetail(user: User) {
        this.userSelected = new User(user);
    }

    private removeUser(user: User) {
        this.atualizarAlert('Deletando usuário...', "alert-info")
        this._userService.deleteUser(user).subscribe(
            data => { },
            error => { this.atualizarAlert(error, "alert-danger") },
            () => {
                this.atualizarAlert('Usuário ' + user.name + ' deletado com sucesso !', "alert-info")
                this.rows.splice(this.rows.indexOf(user), 1);
            }
        )
    }

    private updateUser(obj: any) {
        obj.username = this.userSelected.username;
        obj.id = this.userSelected.id;
        this.atualizarAlert('Atualizando usuário...', "info")
        this._userService.updateUser(new User(obj)).subscribe(
            data => { },
            error => { this.atualizarAlert(error, "error") },
            () => {
                this.atualizarAlert('Usuário ' + obj.name + ' atualizado com sucesso !', "info")
                this.rows = this._userService.loadUsers();
            }
        )
    }

    private switchPermission(project: Project) {
        if(this.permissionAlreadyAssigned(project)){
            this.userSelected.projects.splice(this.userSelected.projects.indexOf(project),1);
        }else{
            if(this.userSelected.projects == null){
                this.userSelected.projects = [];
            }
            this.userSelected.projects.push(project);
        }
        this.updateUser(this.userSelected);
    }

    private permissionAlreadyAssigned(project: Project){
        let status:boolean = false;
        if(this.userSelected.projects != null){
            this.userSelected.projects.forEach(item =>{
                if(item.id === project.id){
                    status = true;
                }
            });
        }
        return status;
    }

    private atualizarAlert(mensagem:string, severity:string){
        this.msgs = [];
        this.msgs.push({summary:'Atenção!',detail:mensagem,severity:severity});
    }

}