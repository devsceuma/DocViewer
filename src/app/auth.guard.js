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
var AuthGuard = (function () {
    function AuthGuard(_router) {
        this._router = _router;
        this.enableAuth = true;
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
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.enableAuth) {
            if (localStorage.getItem('currentUser')) {
                return true;
            }
            this._router.navigate([''], { queryParams: { returnUrl: state.url } });
            return false;
        }
        else {
            return true;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map