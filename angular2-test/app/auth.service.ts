import { Injectable } from '@angular/core';

function loadData(key: string): string {
    let saved_data = window.localStorage[key];

    if(!saved_data) {
        saved_data = [];
    } else {
        try {
            saved_data = JSON.parse(saved_data);
        } catch(e) {
            saved_data = [];
        }
    }

    return saved_data;
}

function saveData(key: string, value: string): void {
    window.localStorage[key] =
        JSON.stringify(value);
}

@Injectable()
export class AuthService {
    getAccessToken(): string {
        return loadData('access_token');
    }
    saveAccessToken(_access_token: string): void {
        saveData('access_token', _access_token)
    }
}
