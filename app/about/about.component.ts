import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'about-page',
    template: `
    I am the about page
    `
    // templateUrl: 'name.component.html'
})
export class AboutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}