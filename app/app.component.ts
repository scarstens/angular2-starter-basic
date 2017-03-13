import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    styles: [`
        .navbar .active {
            color: #ffffff;
        }
    `],
    templateUrl: './app/app.component.html'
})
export class AppComponent {
    message = 'This is the sample message.';
}