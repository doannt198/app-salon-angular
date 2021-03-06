import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class AuthInterceptorService implements HttpInterceptor {

constructor() { }

intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token ="tokkendemo";
    const headers = new HttpHeaders().set("access-token", token);
    const AuthRequest = request.clone({headers:headers});
    return next.handle(AuthRequest);
}
}