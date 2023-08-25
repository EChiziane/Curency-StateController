import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

  public getToken(): string {
    // @ts-ignore
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    return Boolean(this.getToken());
  }

  public logout(redirectToLogin: boolean) {
    localStorage.removeItem('token');
    if (redirectToLogin) {
      this.router.navigate(['login']);
    }
  }
}
