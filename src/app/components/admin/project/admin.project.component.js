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
        this.msgs = [];
        this.projects = [];
    }
    ProjectComponent.prototype.ngOnInit = function () {
        this.projects = this._projectService.loadProjects();
    };
    ProjectComponent.prototype.saveProject = function (form) {
        var _this = this;
        if (form.name === "" || typeof form.name == 'undefined') {
            this.atualizarAlert('O campo \'Nome do Projeto\' é obrigatório', 'error');
        }
        else if (form.url === "" || typeof form.url == 'undefined') {
            this.atualizarAlert('O campo \'URL Master\' é obrigatório', 'error');
        }
        else {
            var project_1 = new Project_1.Project(form);
            this._projectService.saveProject(project_1).subscribe(function (data) { }, function (error) { _this.atualizarAlert(error, 'error'); }, function () {
                _this.atualizarAlert('Projeto salvo com sucesso', 'error');
                _this.projects.push(project_1);
            });
        }
    };
    ProjectComponent.prototype.getProjectDetails = function (event) {
        this.msgs = [];
        this.projectSelected = new Project_1.Project(event);
        this._projectService.updateProject(new Project_1.Project(event));
    };
    ProjectComponent.prototype.updateProject = function (project) {
        var pj = new Project_1.Project(project);
        console.log(pj);
    };
    ProjectComponent.prototype.removeProject = function (project) {
        var _this = this;
        this.atualizarAlert('Deletando projeto...', "info");
        this._projectService.deleteProject(project).subscribe(function (data) { }, function (error) { _this.atualizarAlert(error, "error"); }, function () {
            _this.atualizarAlert('Projeto ' + project.name + ' deletado com sucesso !', "info");
            _this.projects.splice(_this.projects.indexOf(project), 1);
        });
    };
    ProjectComponent.prototype.atualizarAlert = function (mensagem, severity) {
        this.msgs.push({ summary: 'Atenção!', detail: mensagem, severity: severity });
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