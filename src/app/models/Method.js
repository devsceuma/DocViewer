"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Parameter_1 = require("./Parameter");
var Method = (function () {
    function Method(obj) {
        var _this = this;
        this.parameters = [];
        this.name = obj.name;
        this.description = obj.description;
        this.returnType = obj.returnType;
        this.dateCreation = obj.dateCreation;
        this.typesRequest = obj.typesRequest;
        this.author = obj.author;
        this.url = obj.url;
        this.modifier = obj.modifier;
        this.onSucess = obj.onSucess;
        if (typeof obj.parameters != 'undefined') {
            obj.parameters.forEach(function (parameter) { return _this.parameters.push(new Parameter_1.Parameter(parameter)); });
        }
        Object.freeze(this);
    }
    return Method;
}());
exports.Method = Method;
//# sourceMappingURL=Method.js.map