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
var router_1 = require("@angular/router");
var LoginService_1 = require("./../../service/LoginService");
var User_1 = require("./../../models/User");
var DocComponent = (function () {
    function DocComponent(router, _loginService) {
        this.router = router;
        this._loginService = _loginService;
    }
    DocComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("currentUser") != null) {
            this.user = new User_1.User(JSON.parse(localStorage.getItem("currentUser")));
        }
        else {
            this.router.navigate(['']);
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
        styleUrls: ['./style_layout.css'],
        providers: [LoginService_1.LoginService]
    }),
    __metadata("design:paramtypes", [router_1.Router, LoginService_1.LoginService])
], DocComponent);
exports.DocComponent = DocComponent;
//# sourceMappingURL=doc.component.js.map