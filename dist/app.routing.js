"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var contact_component_1 = require('./contact/contact.component');
var _404_component_1 = require('./404/404.component');
// Order matters in the router, it handles rules from top to bottom.
var routes = [
    // Redirects first
    {
        path: 'contact-us',
        redirectTo: '/contact',
        pathMatch: 'full'
    },
    // Root Path
    { path: '', component: home_component_1.HomeComponent },
    // Routes
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: '**', component: _404_component_1.NotFoundComponent },
];
exports.appRouting = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map