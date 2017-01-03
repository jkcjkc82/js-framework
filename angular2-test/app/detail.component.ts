import {stringify} from 'qs';
import {Component}   from '@angular/core';
import { DefaultUrlSerializer, UrlSegment, UrlTree, UrlSerializer } from '@angular/router';
import {AuthService} from './auth.service';

@Component({
    selector: 'detail',
    template: `
        <div>
            <a class="button" (click)="onLogout()" *ngIf="access_token">Logout</a>
            <a class="button" (click)="onLogin()" *ngIf="!access_token">Login</a>
        </div>
    `,
})
export class DetailComponent {
    private access_token: string
    private authService: AuthService

    constructor(authService: AuthService) {
        this.authService = authService
        this.access_token = authService.getAccessToken()
    }

    onLogin() {
        const para = {
            response_type: 'token',
            client_id: 'x2adb4mzqfp868e',
            redirect_uri: 'http://localhost:3000'
        }
        window.location.href =
            `https://www.dropbox.com/1/oauth2/authorize?${stringify(para)}`
    }

    onLogout() {
        this.authService.saveAccessToken('')
        location.reload()
    }
}
