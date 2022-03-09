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

  getCustomer(PageIndex:number=1,PageSize:number=10):Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`http://103.81.87.134:5002/api/Customer/getCustomer?PageIndex=${PageIndex}&PageSize=${PageSize}`).pipe(
      )
  }
}