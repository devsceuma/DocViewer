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
var UserService_1 = require("./../../service/UserService");
var ManagerUserComponent = (function () {
    function ManagerUserComponent(_userService) {
        this._userService = _userService;
        this.rows = [
            { name: 'Austin', gender: 'Male', company: 'Swimlane' },
            { name: 'Dany', gender: 'Male', company: 'KFC' },
            { name: 'Molly', gender: 'Female', company: 'Burger King' },
        ];
        this.columns = [
            { prop: 'name' },
            { name: 'Gender' },
            { name: 'Company' }
        ];
    }
    ManagerUserComponent.prototype.ngOnInit = function () {
        console.log("Startou !!!");
        this._userService.loadUsers();
    };
    ManagerUserComponent.prototype.getAllUsers = function () {
        this._userService.loadUsers();
    };
    return ManagerUserComponent;
}());
ManagerUserComponent = __decorate([
    core_1.Component({
        selector: 'manager-user-form',
        template: "   \n    <div>\n      <ngx-datatable\n        [rows]=\"rows\"\n        [columns]=\"columns\">\n      </ngx-datatable>\n    </div>"
    }),
    __metadata("design:paramtypes", [UserService_1.UserService])
], ManagerUserComponent);
exports.ManagerUserComponent = ManagerUserComponent;
//# sourceMappingURL=admin.manager.user.component.js.map