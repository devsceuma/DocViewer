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
var animations_1 = require("@angular/animations");
var router_1 = require("@angular/router");
var LoginService_1 = require("./../../service/LoginService");
var LoginComponent = (function () {
    function LoginComponent(_loginService, _router) {
        this._loginService = _loginService;
        this._router = _router;
        this.message = { message: '', severity: '' };
        this.credentials = { user: "", pwd: "" };
        this.autenticate = true;
        this.feedbackMessage = "disabled";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this._loginService.signout();
    };
    LoginComponent.prototype.logar = function () {
        var _this = this;
        if (this.autenticate) {
            if (this.credentials.user == "" || this.credentials.pwd == "") {
                this.atualizarAlert('Digite os campos de usuário e senha', 'alert-danger', 'enabled');
            }
            else {
                this._loginService.signin(this.credentials.user, this.credentials.pwd).subscribe(function (data) {
                    _this._router.navigate(['doc']);
                    _this.atualizarAlert('', '', 'disabled');
                }, function (error) {
                    _this.atualizarAlert('Usuário ou senha incorreta', 'alert-danger', 'enabled');
                });
            }
        }
        else {
            this._router.navigate(['doc']);
        }
    };
    LoginComponent.prototype.atualizarAlert = function (mensagem, severity, state) {
        this.feedbackMessage = state;
        this.message.message = mensagem;
        this.message.severity = severity;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: "./login.html",
        styleUrls: ['./login.css'],
        providers: [LoginService_1.LoginService],
        animations: [
            animations_1.trigger("feedBackMessageTrigger", [
                animations_1.state("disabled", animations_1.style({ opacity: 0 })),
                animations_1.state("enabled", animations_1.style({ opacity: 1 })),
                animations_1.transition("disabled => enabled", animations_1.animate("300ms ease-in")),
                animations_1.transition("enabled => disabled", animations_1.animate("300ms ease-out"))
            ])
        ]
    }),
    __metadata("design:paramtypes", [LoginService_1.LoginService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map