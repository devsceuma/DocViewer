import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../service/UserService';
import { ProjectService } from './../../../service/ProjectService';
import { User } from './../../../models/User';
import { Project } from './../../../models/Project';

@Component({
    selector: 'manager-user-form',
    templateUrl: './manager-user.html',
    styleUrls: ['./../../../../assets/css/light-bootstrap-dashboard.css', './../../../../assets/css/demo.css','./custom.css'],
    providers: [UserService, ProjectService]
})
export class ManagerUserComponent implements OnInit {

    projects: Project[] = [];
    rows: User[] = [];
    userSelected: User;
    message = { message: '', severity: '' }
    public sortOrder = "asc";
    showDetail: boolean = false;

    constructor(private _userService: UserService, private _projectService: ProjectService) {

    }

    ngOnInit() {
        this.rows = this._userService.loadUsers();
        this.projects = this._projectService.loadProjects();
    }

    getUserDetail(user: User) {
        this.showDetail = true;
        this.userSelected = new User(user);
        console.log(this.userSelected);
    }

    removeUser(user: User) {
        this.atualizarAlert('Deletando usuário...', "alert-info")
        this._userService.deleteUser(user).subscribe(
            data => { },
            error => { this.atualizarAlert(error, "alert-danger") },
            () => {
                this.atualizarAlert('Usuário ' + user.name + ' deletado com sucesso !', "alert-info")
                this.rows.splice(this.rows.indexOf(user), 1);
                this.showDetail = false;
            }
        )
    }

    updateUser(obj: any) {
        console.log(new User(obj));
        obj.username = this.userSelected.username;
        obj.id = this.userSelected.id;
        this.atualizarAlert('Atualizando usuário...', "alert-info")
        this._userService.updateUser(new User(obj)).subscribe(
            data => { },
            error => { this.atualizarAlert(error, "alert-danger") },
            () => {
                this.atualizarAlert('Usuário ' + obj.name + ' atualizado com sucesso !', "alert-info")
                this.rows = this._userService.loadUsers();
            }
        )
    }

    switchPermission(project: Project) {
        if(this.permissionAlreadyAssigned(project)){
            this.userSelected.projects.splice(this.userSelected.projects.indexOf(project),1);
        }else{
            if(this.userSelected.projects == null){
                this.userSelected.projects = [];
            }
            this.userSelected.projects.push(project);
        }
    }

    permissionAlreadyAssigned(project: Project){
        let status:boolean = false;
        if(this.userSelected.projects != null){
            this.userSelected.projects.filter(item =>{
                if(item.name == project.name){
                    status = true;
                }
            });
        }
        return status;
    }

    atualizarAlert(mensagem: string, severity: string) {
        this.message.message = mensagem;
        this.message.severity = severity;
    }
}