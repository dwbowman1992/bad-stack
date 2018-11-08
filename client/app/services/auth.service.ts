import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

const APIEndpoint = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
    login(email: string, pwd: string) {
      return this.http.post(APIEndpoint + 'users/login', {
        email: email,
        password: pwd
      });
    }
}
