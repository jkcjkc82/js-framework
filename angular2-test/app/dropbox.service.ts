import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {AuthService} from './auth.service';

@Injectable()
export class DropboxService {
    constructor(
        private http: Http,
        private authService: AuthService
    ) {}
    getFolders(): Promise<Array<Object>> {
        const access_token = this.authService.getAccessToken()
        const url = 'https://api.dropboxapi.com/2/files/list_folder';
        const body = {
            path: '/framework-test'
        }
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + access_token
        });

        return this.http
            .post(url, JSON.stringify(body), {headers})
            .toPromise()
            .then((res) => {
                return res.json().entries
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
