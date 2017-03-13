import {Injectable} from '@angular/core';
import {User} from '../models/user';

const usersPromise: Promise<User[]> = Promise.resolve(
    [
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
);

@Injectable()
export class UserService {
    getUsers() {
        return usersPromise;
    }

    getUser(username) {
        // Shorthand for longform below
        return usersPromise.then(users => users.find(user => user.username === username));
        // let user = usersPromise.then(users => {
        //     return users.find(user => {
        //         return user.username === username;
        //     });
        // });
        // return user;
    }
}