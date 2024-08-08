import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpClient = inject(HttpClient);
  loggedIn!: boolean;
  baseUrl = 'http://localhost:5152/api';

  constructor() { }


  signup(data: any) {
    return this.httpClient.post(`${this.baseUrl}/user/register`, data);
  }

  login(data: any) {
    this.loggedIn = true;
    return this.httpClient.post(`${this.baseUrl}/user/login`, data)
      .pipe(tap((result) => {
        localStorage.setItem('authUser', JSON.stringify(result));
      }));
  }

  logout() {
    this.loggedIn = true;
    localStorage.removeItem('authUser');
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
