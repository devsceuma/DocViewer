"use strict";
var router_1 = require("@angular/router");
var login_component_1 = require("./components/login/login.component");
var doc_component_1 = require("./components/doc/doc.component");
var APP_ROUTES = [
    { path: 'doc', component: doc_component_1.DocComponent },
    { path: '', component: login_component_1.LoginComponent }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=routes.general.js.map