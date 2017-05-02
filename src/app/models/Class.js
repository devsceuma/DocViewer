"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Method_1 = require("./Method");
var Constructor_1 = require("./Constructor");
var Field_1 = require("./Field");
var Class = (function () {
    function Class(obj) {
        var _this = this;
        this.constructors = [];
        this.fields = [];
        this.methods = [];
        this.name = obj.name;
        this.origin = obj.origin;
        this.description = obj.description;
        this.url = obj.url;
        if (typeof obj.constructor != 'undefined') {
            obj.constructors.forEach(function (constructor) { return _this.constructors.push(new Constructor_1.Constructor(constructor)); });
        }
        if (typeof obj.fields != 'undefined') {
            obj.fields.forEach(function (field) { return _this.fields.push(new Field_1.Field(field)); });
        }
        if (typeof obj.methods != 'undefined') {
            obj.methods.forEach(function (method) { return _this.methods.push(new Method_1.Method(method)); });
        }
    }
    return Class;
}());
exports.Class = Class;
//# sourceMappingURL=Class.js.map