import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {appRouting} from './app.routing';
import {HomeComponent} from './home/home.component';

import {ContactComponent} from './contact/contact.component';

import {NotFoundComponent} from './404/404.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        appRouting,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ContactComponent,
        NotFoundComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}