import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' })
}
@Injectable({
  providedIn: 'root'  
})
export class NotificationService {

  constructor(private httpClient:HttpClient) { }
  getNotification(queryString:string):Observable<any> {
    return this.httpClient.get<any>(`http://103.81.87.134:5002/api/report/getNotiall?${queryString}`)
  }
  getDetailNotification(id:number):Observable<any>{
    return this.httpClient.get<any>(`http://103.81.87.134:5002/api/report/getNotibyId?Id=${id}`)
  }
}
