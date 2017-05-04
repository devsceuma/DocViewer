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
var auth_guard_1 = require("./../../../auth.guard");
var AdminComponent = (function () {
    function AdminComponent(_router, _userService, _authGuard) {
        this._router = _router;
        this._userService = _userService;
        this._authGuard = _authGuard;
    }
    AdminComponent.prototype.ngOnInit = function () {
        if (!this._authGuard.enableAuth) {
            this.user = new User_1.User(this._authGuard.userGenerated);
        }
        else {
            this.user = new User_1.User(JSON.parse(localStorage.getItem("currentUser")));
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
    __metadata("design:paramtypes", [router_1.Router, LoginService_1.LoginService, auth_guard_1.AuthGuard])
], AdminComponent);
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map