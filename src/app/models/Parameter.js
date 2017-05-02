"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Parameter = (function () {
    function Parameter(obj) {
        this.name = obj.name;
        if (obj.description == null) {
            this.description = 'Descrição não documentada';
        }
        else {
            this.description = obj.description;
        }
        this.type = obj.type;
        this.optional = obj.optional;
        Object.freeze(this);
    }
    return Parameter;
}());
exports.Parameter = Parameter;
//# sourceMappingURL=Parameter.js.map