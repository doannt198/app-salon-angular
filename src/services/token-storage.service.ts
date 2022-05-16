import { STORAGE_KEY } from '../app/common/constants/constants';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  public tokenSubject: BehaviorSubject<any>;
  constructor(
      private tokenService: TokenStorageService
  ) {
   
  }

  signOut(): void {
    window.sessionStorage.clear();
    this.tokenSubject.next(null);
  }

  setToken(token:any) {
    this.tokenSubject.next(token);
    window.sessionStorage.setItem(STORAGE_KEY.TOKEN, token?.access_token);
    window.sessionStorage.setItem(STORAGE_KEY.REFRESH_TOKEN, token?.refresh_token);
    window.sessionStorage.setItem(STORAGE_KEY.TOKEN_DATA, JSON.stringify(token));
  }

  get getToken(): string | null {
    return (this.tokenSubject.value && this.tokenSubject.value?.access_token) || null;
  }

  get getRefreshToken(): string | null {
    return (this.tokenSubject.value && this.tokenSubject.value.refresh_token) || null;
  }

  clearToken() {
    this.tokenSubject.next(null);
    window.sessionStorage.removeItem(STORAGE_KEY.TOKEN);
  }
}
