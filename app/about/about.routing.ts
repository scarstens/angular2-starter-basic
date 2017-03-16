import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './about.component';
import {AboutSectionComponent} from './about-section.component';
import {AboutUserComponent} from './about-user.component';
import {AboutUsersResolve} from './about-resolve.service';

const aboutRoutes: Routes = [
    {
        // Lazy Loaded
        path: '',
        component: AboutSectionComponent,
        children: [
            {
                path: '',
                component: AboutComponent,
                resolve: {
                    users: AboutUsersResolve
                }
            },
            {
                path: ':username',
                component: AboutUserComponent
            },
        ]
    },
];

export class RoutingModule {
}

export const AboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes);