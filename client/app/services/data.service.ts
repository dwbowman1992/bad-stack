import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {}

  setCurrentUser(userData) {
    localStorage.setItem('user', JSON.stringify(userData));
  }

  getCurrentUser() {
    return localStorage.getItem('user');
  }

  removeCurrentUser() {
    localStorage.removeItem('user');
  }

  getCurrentUserToken() {
    return JSON.parse(localStorage.getItem('user')).token;
  }
}
