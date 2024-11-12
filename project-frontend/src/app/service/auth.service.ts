import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  setUser(user: any) {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.setItem('user', JSON.stringify(user));
    }
  }

  getUser() {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const user = sessionStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    }
    return null;
  }

  logout() {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.removeItem('user');
    }
  }
}
