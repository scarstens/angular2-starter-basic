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
var router_1 = require("@angular/router");
var AboutSectionComponent = (function () {
    function AboutSectionComponent(route) {
        this.route = route;
        this.username = 'UN-Placeholder';
    }
    AboutSectionComponent.prototype.ngOnInit = function () {
        this.username = this.route.snapshot.params['username'];
        console.log(this);
    };
    AboutSectionComponent.prototype.goBack = function () {
        window.history.back();
    };
    AboutSectionComponent = __decorate([
        core_1.Component({
            template: "\n        <h2>About Section</h2>\n        <ol class=\"breadcrumb\">\n            <li (click)=\"goBack()\"><span class=\"glyphicon glyphicon-menu-left\" aria-hidden=\"true\"></span></li>\n            <li><a routerLink=\"/\" routerLinkActive=\"active\"\n                   [routerLinkActiveOptions]=\"{ exact: true }\">Home</a></li>\n            <li><a routerLink=\"/about\" routerLinkActive=\"active\">About</a></li>\n            <li>UN:{{ username }}</li>\n        </ol>\n        <router-outlet></router-outlet>\n    ",
            styles: ["\n        h2 {\n            text-align: center;\n        }\n\n        .breadcrumb .active {\n            cursor: default !important;\n            color: #aeaeae;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], AboutSectionComponent);
    return AboutSectionComponent;
}());
exports.AboutSectionComponent = AboutSectionComponent;
//# sourceMappingURL=about-section.component.js.map