import { Injectable } from '@angular/core';
const TOKEN_KEY = 'Token_Key';
const NAME_KEY = 'Name_Key';
const ROLE_KEY = 'Role_Key';
const ID_KEY = 'Id_Key';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor() { }
  public setToken(token: string){
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): any{
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
  public setName(name: string){
    window.sessionStorage.removeItem(NAME_KEY);
    window.sessionStorage.setItem(NAME_KEY, name);
  }
  public getName(): any{
    return window.sessionStorage.getItem(NAME_KEY);
  }
  public setRole(role : string){
    window.sessionStorage.removeItem(ROLE_KEY)
    window.sessionStorage.setItem(ROLE_KEY,role)
  }
  public getRole(){
    return window.sessionStorage.getItem(ROLE_KEY);
  }
  public setId(id : any){
    window.sessionStorage.removeItem(ID_KEY)
    window.sessionStorage.setItem(ID_KEY,id)
  }
  public getId(){
    return window.sessionStorage.getItem(ID_KEY);
  }

}
