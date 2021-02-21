import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl: string = "http://localhost:3000/api/register";
  private _loginUrl: string = "http://localhost:3000/api/login";

  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user: User) {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user: User) {
    return this.http.post<any>(this._loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/events']);
  }
}
