import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {NotFoundComponent} from './404/404.component';

// Order matters in the router, it handles rules from top to bottom.
const routes: Routes = [
    // Redirects first
    {
        path: 'contact-us',
        redirectTo: '/contact',
        pathMatch: 'full'
    },
    // Root Path
    {path: '', component: HomeComponent},
    {
        path: 'about',
        loadChildren: 'app/about/about.module#AboutModule'
    },
    // Routes
    {path: 'contact', component: ContactComponent},
    {path: '**', component: NotFoundComponent},
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);