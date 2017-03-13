import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../shared/models/user';
import {UserService} from '../shared/services/user.serivce';

@Component({
    templateUrl: './app/about/about-user.component.html',
    styles: [
            `img {
            max-width: 40%;
        }`
    ]
})

export class AboutUserComponent implements OnInit {
    user: User;

    constructor(private route: ActivatedRoute, private service: UserService, private router: Router) {
    }

    ngOnInit() {
        // Grab the current username.
        let username = this.route.snapshot.params['username'];

        this.service.getUser(username).then(user => {
            this.user = user;
        })
    }

    goBack() {
        this.router.navigate(['/about'])
        // Do not always want to go back to history, sometimes follow link hierarchy.
        // window.history.back();
    }

}