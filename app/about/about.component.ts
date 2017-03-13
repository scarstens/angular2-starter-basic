import {Component, OnInit} from '@angular/core';

export class User {
    id: Number;
    name: string;
    username: string;
    avatar: string;
    team: string;
}

const users: User[] = [
    {
        id: 1,
        name: 'Seth Carstens',
        username: 'sethcarstens',
        avatar: 'https://pbs.twimg.com/profile_images/494545489115623424/jg5yrIVq_400x400.jpeg',
        team: 'FanSided'
    },
    {
        id: 2,
        name: 'Chris',
        username: 'sevilayha',
        avatar: 'https://pbs.twimg.com/profile_images/804421640465580032/aG7EyewO_400x400.jpg',
        team: 'ScotchIO'

    },
    {
        id: 3,
        name: 'Holly',
        username: 'hollylawly',
        avatar: 'https://pbs.twimg.com/profile_images/721918869821005824/2qT_RY5M_400x400.jpg',
        team: 'ScotchIO'
    },
    {
        id: 4,
        name: 'Maura Teal',
        username: 'mlteal',
        avatar: 'https://pbs.twimg.com/profile_images/462661726891028480/CdlJghsO.jpeg',
        team: 'FanSided'
    }
]

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
    users: User[] = users;

    constructor() {
    }

    ngOnInit() {
    }

}