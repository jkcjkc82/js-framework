import { Component }   from '@angular/core';
import { HashLocationStrategy }   from '@angular/common';
import {parse} from 'qs';
import {AuthService} from './auth.service';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular App Test</h1>
        <div class="row">
            <div class="column"><master></master></div>
            <div class="column"><detail></detail></div>
       </div>
    `
})
export class AppComponent {
    constructor(
        private hash: HashLocationStrategy,
        private auth: AuthService
    ) {
        const {access_token} = parse(hash.path())

        if(access_token) {
            auth.saveAccessToken(access_token);
            location.href = '/'
        }
    }
}
