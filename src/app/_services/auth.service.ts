import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationRequest } from '../_model-dto/auth/authentication-request';
import { AuthenticationResponse } from '../_model-dto/auth/authentication-response';
import { UserDetails } from '../_model-dto/user/user-details';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiServiceUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private router: Router) { }

  public loginUser(userUserLogin: AuthenticationRequest):Observable<AuthenticationResponse>{
    return this.http.post<AuthenticationResponse>(`${this.apiServiceUrl}/authenticate`, userUserLogin);
  } 

  public registerUser(userDetail: UserDetails):Observable<AuthenticationResponse>{
    return this.http.post<AuthenticationResponse>(`${this.apiServiceUrl}/register`, userDetail);
  }
  
  
  redirectUrl!: string;

  public loggedIn(): boolean{
    this.redirectUrl = this.router.url;
    return !!localStorage.getItem('jwtToken');
  } 

  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }

  public getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  public setUserName(username: string) {
    localStorage.setItem('username', username);
  }

  public getUsername(): string | null {
    return localStorage.getItem('username');
  }

  public setRole(role: string) {
    localStorage.setItem('role', role);
  }

  public getRole(): string | null {
    return localStorage.getItem('role');
  }

  public clear() {
    localStorage.clear();
  }
}
