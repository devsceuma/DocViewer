"use strict";
var router_1 = require("@angular/router");
var login_component_1 = require("./components/login/login.component");
var doc_component_1 = require("./components/doc/doc.component");
var admin_component_1 = require("./components/admin/admin.component");
var admin_manager_user_component_1 = require("./components/admin/admin.manager.user.component");
var admin_register_user_component_1 = require("./components/admin/admin.register.user.component");
var APP_ROUTES = [
    { path: 'doc', component: doc_component_1.DocComponent },
    { path: 'admin', component: admin_component_1.AdminComponent, children: [
            { path: 'add-user', component: admin_register_user_component_1.RegisterUserComponent },
            { path: 'manager-user', component: admin_manager_user_component_1.ManagerUserComponent }
        ] },
    { path: '', component: login_component_1.LoginComponent }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=routes.general.js.map