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
var tab_1 = require("./tab");
var Tabs = (function () {
    function Tabs() {
    }
    Tabs.prototype.ngAfterContentInit = function () {
        var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    };
    Tabs.prototype.selectTab = function (tab) {
        this.tabs.toArray().forEach(function (tab) { return tab.active = false; });
        tab.active = true;
    };
    return Tabs;
}());
__decorate([
    core_1.ContentChildren(tab_1.Tab),
    __metadata("design:type", core_1.QueryList)
], Tabs.prototype, "tabs", void 0);
Tabs = __decorate([
    core_1.Component({
        selector: 'tabs',
        template: "\n    <ul class=\"nav nav-tabs\">\n      <li *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab,event)\" [class.active]=\"tab.active\">\n        <a>{{tab.title}}</a>\n      </li>\n    </ul>\n    <ng-content></ng-content>\n  "
    })
], Tabs);
exports.Tabs = Tabs;
//# sourceMappingURL=tabs.js.map