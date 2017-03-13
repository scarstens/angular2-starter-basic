import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home-page',
    template: `
    <div class="jumbotron">
    	<div class="container">
    		<h1>Ng App</h1>
    		<p>Welcome to the Angular 2 app router.</p>
    	</div>
    </div>
    `
    // templateUrl: 'name.component.html'
})
export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}