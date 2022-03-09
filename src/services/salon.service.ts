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
}
