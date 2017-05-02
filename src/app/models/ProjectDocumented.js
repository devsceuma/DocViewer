"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Class_1 = require("./Class");
var ProjectDocumented = (function () {
    function ProjectDocumented(doc) {
        var _this = this;
        this.classes = [];
        this.name = doc.name;
        this.description = doc.description;
        this.url = doc.url;
        doc.classes.forEach(function (d) { return _this.classes.push(new Class_1.Class(d)); });
    }
    return ProjectDocumented;
}());
exports.ProjectDocumented = ProjectDocumented;
//# sourceMappingURL=ProjectDocumented.js.map