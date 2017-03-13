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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var user_serivce_1 = require('../shared/services/user.serivce');
var AboutUserComponent = (function () {
    function AboutUserComponent(route, service, router) {
        this.route = route;
        this.service = service;
        this.router = router;
    }
    AboutUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Grab the current username.
        var username = this.route.snapshot.params['username'];
        console.log(this);
        this.service.getUser(username).then(function (user) {
            _this.user = user;
        });
    };
    AboutUserComponent.prototype.goBack = function () {
        this.router.navigate(['/about']);
        // Do not always want to go back to history, sometimes follow link hierarchy.
        // window.history.back();
    };
    AboutUserComponent = __decorate([
        core_1.Component({
            templateUrl: './app/about/about-user.component.html',
            styles: [
                "img {\n            max-width: 40%;\n        }"
            ]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, user_serivce_1.UserService, router_1.Router])
    ], AboutUserComponent);
    return AboutUserComponent;
}());
exports.AboutUserComponent = AboutUserComponent;
//# sourceMappingURL=about-user.component.js.map