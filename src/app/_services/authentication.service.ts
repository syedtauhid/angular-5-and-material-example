import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
    apiEndpoint = "http://localhost:3000";
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>(this.apiEndpoint +'/login', { email: username, password: password })
            .map(user => {
                localStorage.setItem('currentUser', JSON.stringify(user));
                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}