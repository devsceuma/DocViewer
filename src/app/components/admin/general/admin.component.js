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
var User_1 = require("./../../../models/User");
var LoginService_1 = require("./../../../service/LoginService");
var router_1 = require("@angular/router");
var AdminComponent = (function () {
    function AdminComponent(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
        this.autenticateAdmin = false;
        this.userGenerated = { id: "5904c8c2eedce401888056ce",
            name: "Marcus Vinicius Cartagenes",
            username: "marcus",
            password: "202cb962ac59075b964b07152d234b70",
            email: "mvcartagenes@gmail.com",
            organization: "Universidade Ceuma",
            job: "Desenvolvedor de Sistemas",
            projects: [{ "id": "59049fddeedce43b1645b591",
                    url: "www.ceuma.br/ServicosOnline",
                    name: "ServicosOnline" }],
            profile: "AD" };
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.validateSession();
    };
    AdminComponent.prototype.validateSession = function () {
        if (this.autenticateAdmin) {
            if (localStorage.getItem("currentUser") != null) {
                this.user = new User_1.User(JSON.parse(localStorage.getItem("currentUser")));
                if (this.user.profile != 'AD') {
                    this._router.navigate(['']);
                }
            }
            else {
                this._router.navigate(['']);
            }
        }
        else {
            this.user = new User_1.User(this.userGenerated);
        }
    };
    AdminComponent.prototype.logout = function () {
        this._userService.signout();
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    core_1.Component({
        selector: 'admin-panel',
        templateUrl: './admin.html',
        styleUrls: ['./../../../../assets/css/light-bootstrap-dashboard.css', './../../../../assets/css/demo.css'],
        providers: [LoginService_1.LoginService]
    }),
    __metadata("design:paramtypes", [router_1.Router, LoginService_1.LoginService])
], AdminComponent);
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map