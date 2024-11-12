import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loginUrl = 'http://localhost:18080/api/login'; 
  constructor(private http: HttpClient) {}

  login(user: User): Observable<User> {
    return this.http.post<User>(this.loginUrl, user, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}
