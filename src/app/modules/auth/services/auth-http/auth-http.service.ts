import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../../models/user.model';
import { environment } from '../../../../../environments/environment';
import { AuthModel } from '../../models/auth.model';
import { environmentpath } from 'src/app/pages/environments/environments';
const API_USERS_URL = `${environmentpath.apiUrl}/stashook`;

@Injectable({
  providedIn: 'root',
})
export class AuthHTTPService {
  constructor(private http: HttpClient) {}

  // public methods
  login(username: string, password: string): Observable<any> {
    //let body = '{"username":"'+username+',"password":"'+password+'"}';
    let jsonBody ={
      "username":username,
      "password":password
    };
    console.log("jsonBody",jsonBody);
    //return this.http.post<AuthModel>(`${API_USERS_URL}/login`, {"username":+username,"password":password},{ headers:{
      return this.http.post<AuthModel>(`${API_USERS_URL}/login`, jsonBody,{ headers:{
      'Content-Type':'application/json',
     }
    });
  }

  // CREATE =>  POST: add a new user to the server
  createUser(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(API_USERS_URL, user);
  }

  // Your server should check email => If email exists send link to the user and return true | If email doesn't exist return false
  forgotPassword(email: string): Observable<boolean> {
    return this.http.post<boolean>(`${API_USERS_URL}/forgot-password`, {
      email,
    });
  }

  getUserByToken(token: string): Observable<UserModel> {
    const httpHeaders = new HttpHeaders({
      Authorization: `${token}`,
    });
    return this.http.post<UserModel>(`${API_USERS_URL}/getUser`,{}, {
      headers: httpHeaders,
    });
  }
}
