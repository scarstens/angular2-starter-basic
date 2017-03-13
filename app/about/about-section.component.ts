import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
    template: `
        <h2>About Section</h2>
        <ol class="breadcrumb">
            <li (click)="goBack()"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span></li>
            <li><a routerLink="/" routerLinkActive="active"
                   [routerLinkActiveOptions]="{ exact: true }">Home</a></li>
            <li><a routerLink="/about" routerLinkActive="active">About</a></li>
            <li>UN:{{ username }}</li>
        </ol>
        <router-outlet></router-outlet>
    `,
    styles: [`
        h2 {
            text-align: center;
        }

        .breadcrumb .active {
            cursor: default !important;
            color: #aeaeae;
        }
    `]
})
export class AboutSectionComponent implements OnInit {
    username: string = 'UN-Placeholder';
    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.username = this.route.snapshot.params['username'];
        console.log(this);
    }

    goBack(){
        window.history.back();
    }

}