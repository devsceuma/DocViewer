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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var core_1 = require("@angular/core");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var Service = (function () {
    function Service(_http) {
        this._http = _http;
        this._urlMaster = "http://localhost:8080/";
    }
    Service.prototype.post = function (api, params) {
        return this._http.post(this._urlMaster + api, params, this._getHeaders('P')).catch(this._handleError);
    };
    Service.prototype.get = function (api, query) {
        return this._http.get(this._urlMaster + api + query).map(this._extractData).catch(this._handleError);
    };
    Service.prototype._extractData = function (res) {
        var data = res.json();
        return data;
    };
    /**
     * HandlerError responsável por pegar os callbacks das minhas requisições GET E POST
     * @param error
     */
    Service.prototype._handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.message || JSON.stringify(body);
            errMsg = "" + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable_1.Observable.throw(errMsg);
    };
    /**
     * HEADERS RESPONSÁVEIS PARA ENVIO DE FORMULARIO
     * @param type GET, POST
     */
    Service.prototype._getHeaders = function (type) {
        if (type === 'G') {
            var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
            return headers;
        }
        else {
            var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
            return headers;
        }
    };
    return Service;
}());
Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], Service);
exports.Service = Service;
//# sourceMappingURL=Service.js.map