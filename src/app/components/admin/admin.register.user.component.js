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
var core_1 = require("@angular/core");
var UserService_1 = require("./../../service/UserService");
var User_1 = require("./../../models/User");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/catch");
var RegisterUseComponent = (function () {
    function RegisterUseComponent(_userService) {
        this._userService = _userService;
        this.message = { message: '', severity: '' };
    }
    RegisterUseComponent.prototype.ngOnInit = function () {
    };
    RegisterUseComponent.prototype.registerUser = function (form) {
        var _this = this;
        if (form.confirmPassword != form.password) {
            this.atualizarAlert("As senhas precisam coincidir", "alert-danger");
        }
        else {
            this._userService.addUser(new User_1.User(form)).subscribe(function (data) { console.log(data); }, function (error) { _this.atualizarAlert(error, "alert-danger"); }, function () { _this.atualizarAlert("Usuário inserido com sucesso !", "alert-info"); });
        }
    };
    RegisterUseComponent.prototype.atualizarAlert = function (mensagem, severity) {
        this.message.message = mensagem;
        this.message.severity = severity;
    };
    return RegisterUseComponent;
}());
RegisterUseComponent = __decorate([
    core_1.Component({
        selector: 'register-use-admin-form',
        templateUrl: './register-use.html',
        styleUrls: ['./../../../assets/css/light-bootstrap-dashboard.css', './../../../assets/css/demo.css'],
        providers: [UserService_1.UserService]
    }),
    __metadata("design:paramtypes", [UserService_1.UserService])
], RegisterUseComponent);
exports.RegisterUseComponent = RegisterUseComponent;
//# sourceMappingURL=admin.register.user.component.js.map