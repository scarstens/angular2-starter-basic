import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './about.component';
import {AboutUserComponent} from './about-user.component';
// import {UserService} from '../shared/services/user.serivce';

const aboutRoutes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'about/:username', component: AboutUserComponent},
];

export class RoutingModule {
}

export const AboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes);