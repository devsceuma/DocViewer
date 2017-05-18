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
var ng2_page_scroll_1 = require("ng2-page-scroll");
var router_1 = require("@angular/router");
var LoginService_1 = require("./../../service/LoginService");
var User_1 = require("./../../models/User");
var Project_1 = require("./../../models/Project");
var DocumentationService_1 = require("../../service/DocumentationService");
var ProjectDocumented_1 = require("./../../models/ProjectDocumented");
var auth_guard_1 = require("./../../auth.guard");
var DocComponent = (function () {
    function DocComponent(router, _loginService, _documentationService, _authGuard) {
        this.router = router;
        this._loginService = _loginService;
        this._documentationService = _documentationService;
        this._authGuard = _authGuard;
        this.renderMethod = true;
        this.renderConstructor = true;
        this.filter = { type: '', value: '' };
    }
    DocComponent.prototype.ngOnInit = function () {
        if (!this._authGuard.enableAuth) {
            this.user = new User_1.User(this._authGuard.userGenerated);
        }
        else {
            this.user = new User_1.User(JSON.parse(localStorage.getItem("currentUser")));
        }
    };
    DocComponent.prototype.loadDocumentation = function (obj) {
        var _this = this;
        console.log(obj);
        this._documentationService.getDoc(new Project_1.Project(obj.projeto))
            .subscribe(function (data) { _this.currentProject = new ProjectDocumented_1.ProjectDocumented(data); _this.currentProjectSafety = data; console.log(_this.currentProject); }, function (error) { });
    };
    DocComponent.prototype.filterDocument = function (obj) {
        var _this = this;
        if (obj.value === "" || obj.type === "") {
            this.currentProject = new ProjectDocumented_1.ProjectDocumented(this.currentProjectSafety);
        }
        if (obj.type === 'CLASSE' && obj.value != "") {
            this.currentProject.classes.forEach(function (unity) {
                if (unity.name.indexOf(obj.value) === -1) {
                    console.log(unity.name + " Não contêm " + obj.value);
                    _this.currentProject.classes.splice(_this.currentProject.classes.indexOf(unity), 1);
                }
            });
        }
        else if (obj.type === 'METHOD' && obj.value != "") {
            this.currentProject.classes.forEach(function (unity) {
                unity.methods.forEach(function (method) {
                    if (method.name.toUpperCase() != obj.value.toUpperCase()) {
                        console.log("Método " + method.name + " precisa ser deletado");
                    }
                });
            });
        }
        else {
            this.currentProject = new ProjectDocumented_1.ProjectDocumented(this.currentProjectSafety);
        }
    };
    DocComponent.prototype.getSeverityByTypeRequest = function (typeRequest) {
        if (typeRequest == 'GET') {
            return 'success';
        }
        else if (typeRequest == 'POST') {
            return 'warning';
        }
        else if (typeRequest == 'PUT') {
            return 'info';
        }
        else if (typeRequest == 'DELETE') {
            return 'danger';
        }
    };
    DocComponent.prototype.deslogar = function () {
        this._loginService.signout();
    };
    return DocComponent;
}());
DocComponent = __decorate([
    core_1.Component({
        selector: 'doc',
        templateUrl: './doc.html',
        styleUrls: ['./style_layout.css', './style_responsive.css', './style.css'],
        providers: [LoginService_1.LoginService, DocumentationService_1.DocumentationService, ng2_page_scroll_1.PageScrollService],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [router_1.Router, LoginService_1.LoginService, DocumentationService_1.DocumentationService, auth_guard_1.AuthGuard])
], DocComponent);
exports.DocComponent = DocComponent;
//# sourceMappingURL=doc.component.js.map