import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient:HttpClient) { }

  getAppDeltai(type:string):Observable<any> {
    return this.httpClient.get<any>(`http://103.81.87.134:5002/api/category/getAppManage?TypeApp=${type}`).pipe(
      )
  }
}
