import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  loginUser(LoginRequest: any):Observable<any>{
   return this.http.post('http://localhost:8091/user/login-user',LoginRequest);
  }
}
