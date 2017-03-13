import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {appRouting} from './app.routing';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {AboutUserComponent} from './about/about-user.component';
import {UserService} from './shared/services/user.serivce';
import {NotFoundComponent} from './404/404.component';

@NgModule({
    imports: [BrowserModule, FormsModule, appRouting],
    declarations: [
        AppComponent,
        HomeComponent,
        ContactComponent,
        AboutComponent,
        AboutUserComponent,
        NotFoundComponent
    ],
    providers: [
      UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}