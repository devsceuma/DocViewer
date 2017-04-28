"use strict";
var User = (function () {
    function User(obj) {
        this.id = obj.id;
        this.name = obj.name;
        this.username = obj.username;
        this.email = obj.email;
        this.password = obj.password;
        this.organization = obj.organization;
        this.job = obj.job;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map