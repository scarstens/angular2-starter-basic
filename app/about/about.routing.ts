import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './about.component';
import {AboutSectionComponent} from './about-section.component';
import {AboutUserComponent} from './about-user.component';

const aboutRoutes: Routes = [
    {
        path: '',
        component: AboutSectionComponent,
        children: [
            {
                path: '',
                component: AboutComponent
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