"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Parameter_1 = require("./Parameter");
var Constructor = (function () {
    function Constructor(obj) {
        var _this = this;
        this.parameters = [];
        this.description = obj.description;
        obj.parameters.forEach(function (parameter) { return _this.parameters.push(new Parameter_1.Parameter(parameter)); });
        Object.freeze(this);
    }
    return Constructor;
}());
exports.Constructor = Constructor;
//# sourceMappingURL=Constructor.js.map