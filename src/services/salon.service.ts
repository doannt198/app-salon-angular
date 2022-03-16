import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SalonService {

  constructor(
    private httpClient:HttpClient
  ) { }

  getSalon(queryString: string): Observable<any> {
    return this.httpClient.get(`http://103.81.87.134:5002/api/Salon/LstSalonWithLocal?${queryString}`);
  }
  getSalondetail(id:number):Observable<any>{
    return this.httpClient.get<any>('http://103.81.87.134:5002/api/Salon/getSalonById?Id='+id).pipe()
  }
  getSalonbyTech(id:number):Observable<any>{
    return this.httpClient.get<any>('http://103.81.87.134:5002/api/Salon/getSalonbytech?IdTech='+id).pipe()
  }
}
