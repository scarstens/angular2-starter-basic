import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home-page',
    template: `
    I am the home page
    `
    // templateUrl: 'name.component.html'
})
export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}