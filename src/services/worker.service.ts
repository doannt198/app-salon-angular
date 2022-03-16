import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(private httpClient:HttpClient) { }

  getWorker(queryString:any):Observable<any> {
    return this.httpClient.get<any>(`http://103.81.87.134:5002/api/Technician/LstTechnicianWithLocal?${queryString}`).pipe(
    )}
    getWorkerdetail(id:number): Observable<any> {
   
      return this.httpClient.get<any>('http://103.81.87.134:5002/api/Technician/getTechnicianById?Id='+id)
    }
}
