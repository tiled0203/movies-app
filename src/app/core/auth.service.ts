import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loggedIn = false;

  private authenticated = 'authenticated';

  get loggedIn(): boolean {
    return this._loggedIn;
  }

  constructor() {
    if (sessionStorage.getItem(this.authenticated) === 'true') {
      this._loggedIn = true;
    }
  }

  login(username: string, password: string): void {
    if (username === password) { this._loggedIn = true; }
    sessionStorage.setItem(this.authenticated, 'true');
  }

}
