"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserService_1 = require("./../../../service/UserService");
var ProjectService_1 = require("./../../../service/ProjectService");
var User_1 = require("./../../../models/User");
var ManagerUserComponent = (function () {
    function ManagerUserComponent(_userService, _projectService) {
        this._userService = _userService;
        this._projectService = _projectService;
        this.projects = [];
        this.rows = [];
        this.message = { message: '', severity: '' };
        this.sortOrder = "asc";
        this.showDetail = false;
    }
    ManagerUserComponent.prototype.ngOnInit = function () {
        this.rows = this._userService.loadUsers();
        this.projects = this._projectService.loadProjects();
    };
    ManagerUserComponent.prototype.getUserDetail = function (user) {
        this.showDetail = true;
        this.userSelected = user;
    };
    ManagerUserComponent.prototype.removeUser = function (user) {
        var _this = this;
        this.atualizarAlert('Deletando usuário...', "alert-info");
        this._userService.deleteUser(user).subscribe(function (data) { }, function (error) { _this.atualizarAlert(error, "alert-danger"); }, function () {
            _this.atualizarAlert('Usuário ' + user.name + ' deletado com sucesso !', "alert-info");
            _this.rows.splice(_this.rows.indexOf(user), 1);
            _this.showDetail = false;
        });
    };
    ManagerUserComponent.prototype.updateUser = function (form) {
        var _this = this;
        form.username = this.userSelected.username;
        form.id = this.userSelected.id;
        this.atualizarAlert('Atualizando usuário...', "alert-info");
        this._userService.updateUser(new User_1.User(form)).subscribe(function (data) { }, function (error) { _this.atualizarAlert(error, "alert-danger"); }, function () {
            _this.atualizarAlert('Usuário ' + form.name + ' atualizado com sucesso !', "alert-info");
            _this.rows = _this._userService.loadUsers();
        });
    };
    ManagerUserComponent.prototype.switchPermission = function (project) {
        if (this.permissionAlreadyAssigned(project)) {
            this.userSelected.projects.splice(this.userSelected.projects.indexOf(project), 1);
        }
        else {
            if (this.userSelected.projects == null) {
                this.userSelected.projects = [];
            }
            this.userSelected.projects.push(project);
        }
    };
    ManagerUserComponent.prototype.permissionAlreadyAssigned = function (project) {
        var status = false;
        if (this.userSelected.projects != null) {
            this.userSelected.projects.filter(function (item) {
                if (item.name == project.name) {
                    status = true;
                }
            });
        }
        return status;
    };
    ManagerUserComponent.prototype.atualizarAlert = function (mensagem, severity) {
        this.message.message = mensagem;
        this.message.severity = severity;
    };
    return ManagerUserComponent;
}());
ManagerUserComponent = __decorate([
    core_1.Component({
        selector: 'manager-user-form',
        templateUrl: './manager-user.html',
        styleUrls: ['./../../../../assets/css/light-bootstrap-dashboard.css', './../../../../assets/css/demo.css', './custom.css'],
        providers: [UserService_1.UserService, ProjectService_1.ProjectService]
    }),
    __metadata("design:paramtypes", [UserService_1.UserService, ProjectService_1.ProjectService])
], ManagerUserComponent);
exports.ManagerUserComponent = ManagerUserComponent;
//# sourceMappingURL=admin.manager.user.component.js.map