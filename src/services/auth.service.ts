import { Injectable } from '@angular/core';
import { LoginModel } from 'src/app/model/login.model';
import { HttpClient } from '@angular/common/http';
import { UserManagerSettings } from 'oidc-client';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
/* import { STORAGE_KEY } from '../app/common/constants/constants'; */
/* import { TokenStorageService } from './token-storage.service'; */
import { parseJwt } from "../app/function-common/common";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<any>;
  constructor(
    private httpClient: HttpClient,
   /*  private tokenService: TokenStorageService */
    ) { 
    /*   this.userSubject = new BehaviorSubject<any>(JSON.parse(window.sessionStorage.getItem(STORAGE_KEY.USER_LOGIN) || '')); */
    }

   /*  set setUser(user:any) {
      this.userSubject.next(user);
      window.sessionStorage.setItem(STORAGE_KEY.USER_LOGIN, JSON.stringify(user));
    } */

login(user: LoginModel): Observable<any> {
   return this.httpClient.post<any>("https://login.cooftech.net/api/auth/Login",
   user
   )

      /* this.tokenService.setToken(token); */
      /* this.setUserDetail(token.access_token); */
}

/* setUserDetail(token: string): void {
  if (token) {
    const decodeToken = parseJwt(token);
    const detail = {
      email: decodeToken.email,
      name: decodeToken.name,
      username: decodeToken.preferred_username,
      cif: decodeToken.cif[0]
    };
    this.setUser = detail;
  }
} */

}
