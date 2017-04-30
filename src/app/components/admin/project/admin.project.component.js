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
var Project_1 = require("./../../../models/Project");
var ProjectService_1 = require("./../../../service/ProjectService");
var ProjectComponent = (function () {
    function ProjectComponent(_projectService) {
        this._projectService = _projectService;
        this.message = { message: '', severity: '' };
        this.projects = [];
    }
    ProjectComponent.prototype.ngOnInit = function () {
        this.projects = this._projectService.loadProjects();
    };
    ProjectComponent.prototype.saveProject = function (form) {
        var _this = this;
        if (form.name === "" || typeof form.name == 'undefined') {
            this.atualizarAlert('O campo \'Nome do Projeto\' é obrigatório', 'alert-danger');
        }
        else if (form.url === "" || typeof form.url == 'undefined') {
            this.atualizarAlert('O campo \'URL Master\' é obrigatório', 'alert-danger');
        }
        else {
            var project_1 = new Project_1.Project(form);
            this._projectService.saveProject(project_1).subscribe(function (data) { }, function (error) { _this.atualizarAlert(error, 'alert-danger'); }, function () {
                _this.atualizarAlert('Projeto salvo com sucesso', 'alert-info');
                _this.projects.push(project_1);
            });
        }
    };
    ProjectComponent.prototype.removeProject = function (project) {
        var _this = this;
        this.atualizarAlert('Deletando projeto...', "alert-info");
        this._projectService.deleteProject(project).subscribe(function (data) { }, function (error) { _this.atualizarAlert(error, "alert-danger"); }, function () {
            _this.atualizarAlert('Projeto ' + project.name + ' deletado com sucesso !', "alert-info");
            _this.projects.splice(_this.projects.indexOf(project), 1);
        });
    };
    ProjectComponent.prototype.atualizarAlert = function (mensagem, severity) {
        this.message.message = mensagem;
        this.message.severity = severity;
    };
    return ProjectComponent;
}());
ProjectComponent = __decorate([
    core_1.Component({
        selector: 'project-component',
        templateUrl: './project.html',
        styleUrls: ['./../../../../assets/css/light-bootstrap-dashboard.css', './../../../../assets/css/demo.css'],
        providers: [ProjectService_1.ProjectService]
    }),
    __metadata("design:paramtypes", [ProjectService_1.ProjectService])
], ProjectComponent);
exports.ProjectComponent = ProjectComponent;
//# sourceMappingURL=admin.project.component.js.map