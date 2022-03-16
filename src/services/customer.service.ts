import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from 'src/app/model/customer.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  getCustomer(queryString:string):Observable<any> {
    return this.httpClient.get<any>(`http://103.81.87.134:5002/api/Customer/getCustomer?${queryString}`).pipe(
      )
  }
  getCustomerdetail(id:number): Observable<any> {
   
    return this.httpClient.get<any>('http://103.81.87.134:5002/api/Customer/getCustomerbyId?Id='+id).pipe()
  }
}