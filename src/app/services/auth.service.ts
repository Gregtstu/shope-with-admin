import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import {environment} from 'src/environments/environment'
 
export interface IUser{
  email:string,
  password:string,
  returnSecureToken:boolean,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logIn(obj:IUser):Observable<IUser>{
    return this.http.post<IUser>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, obj).pipe(
      tap(this.setToken)
    )
  }

  setToken(res:any):void{
    if(res){
      const expData = new Date(new Date().getTime() + +res.expiresIn * 1000);
      localStorage.setItem('fb-data-token', expData.toString());
      localStorage.setItem('fb-token', res.idToken);
    } else {
      localStorage.clear(); 
    }
  }

  get token(){
    const expData = new Date(localStorage.getItem('fb-data-token') || '');
    
    if (new Date > expData){
      this.logout();
      return null;
    } else{
      return localStorage.getItem('fb-token')
    }
  }

  logout(){
    return this.setToken(null);
  }

  isAuthenticated(){
    return !!this.token
  }

}