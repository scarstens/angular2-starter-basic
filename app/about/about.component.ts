import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { User } from '../shared/models/user';

@Component({
    moduleId: module.id,
    selector: 'about-page',
    template: `
        <div class="row">
            <div class="col-sm-4" *ngFor="let user of users">
                <div class="profile-card" [routerLink]="['/about', user.username]">
                    <img [src]="user.avatar" alt="" class="img-responsive img-circle">
                    <h2>{{ user.name }}</h2>
                    <p><a href="http://twitter.com/{{user.username}}">{{ user.name }}, <i>Team {{ user.team }}</i></a></p>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .profile-card {
            background: #f3f3f3;
            border-radius: 4px;
            padding: 30px;
            margin-bottom: 30px;
            text-align: center;
        }

        .profile-card img {
            max-width: 50%;
            margin: 15px auto;
        }
    `]
    // templateUrl: 'name.component.html'
})
export class AboutComponent implements OnInit {
    users: User[];

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        // this.service.getUsers().then(users => this.users = users);
        this.route.data.forEach( ( data: {users: User[] }) => {
            this.users = data.users;
        } );
    }

}