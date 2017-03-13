import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {AboutUserComponent} from './about/about-user.component';
import {ContactComponent} from './contact/contact.component';
import {NotFoundComponent} from './404/404.component';

// Order matters in the router, it handles rules from top to bottom.
const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'about/:username', component: AboutUserComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', component: NotFoundComponent},
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);