import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  // Login User

  loginUser(LoginRequest: any): Observable<any> {
    return this.http.post(
      'http://localhost:8091/user/login-user',
      LoginRequest
    );
  }

  // Register User

  registerUser(user: any) {
    return this.http.post('http://localhost:8091/user/register-user', user, {
      responseType: 'text',
    });
  }

  // Get All User

  getAllUsers(): Observable<any> {
    return this.http.get('http://localhost:8091/user/get-all-user');
  }

  // Delete User

  deleteUsers(username: string): Observable<any> {
    const url = `http://localhost:8091/user/delete-user-by-username?username=${username}`;
    return this.http.delete(url, { responseType: 'text' });
  }

  //Get User

  getUserByUsername(username: string): Observable<any> {
    const url = `http://localhost:8091/user/get-user-by-username/${username}`;

    return this.http.get(url, { responseType: 'text' });
  }

  //Update User

  updatingUser(user: any): Observable<any> {
    // const url = http://localhost:8091/user/update-user;

    return this.http.put('http://localhost:8091/user/update-user', user);
  }
}
