import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SignUpForm} from "../model/SingUpForm";
import {JWTToken} from "../model/jwttoken";
import {SignInForm} from "../model/SignInForm";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  data ?: boolean;

  constructor(private http: HttpClient) {
  }
  register(signUp: SignUpForm): Observable<any> {
    return this.http.post<any>(API_URL + '/rest/register',signUp);
  }
  login(signIn : SignInForm): Observable<JWTToken> {
    return this.http.post<JWTToken>(API_URL + '/rest/login', signIn);
  }

  setData(data:any){
    this.data = data;
  }
  getData(): boolean{
    return <boolean>this.data;
  }
}
