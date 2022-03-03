import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalonService {

  constructor() { }

  getSalon(){
    return of(
      [
        { id: 'JGD345VE', namesalon: 'Salon Room mate', phone: '034 034 3947', emailsalon: 'Salonshopmit@gmailcom', andress: 'Số 195, nguyễn khang, yên hoà, cầu giấy ', status: true },
        { id: 'JGD345VE', namesalon: 'Salon 20 Shine', phone: '034 846 5874', emailsalon: 'Salonshopmit@gmailcom', andress: 'Số 195, nguyễn khang, yên hoà, cầu giấy ', status: true },
        { id: 'JGD345VE', namesalon: 'Salon 191', phone: '039 948 7647', emailsalon: 'Salonshopmit@gmailcom', andress: 'Số 195, nguyễn khang, yên hoà, cầu giấy ', status: true },
        { id: 'JGD345VE', namesalon: 'Salon Room mate', phone: '034 309 8463', emailsalon: 'Salonshopmit@gmailcom', andress: 'Số 195, nguyễn khang, yên hoà, cầu giấy', status: true },
        { id: 'JGD345VE', namesalon: 'Salon 20 Shine', phone: '034 098 8988', emailsalon: 'Salonshopmit@gmailcom', andress: 'Số 195, nguyễn khang, yên hoà, cầu giấy', status: true },
        { id: 'JGD345VE', namesalon: 'Salon 191', phone: '034 093 8764', emailsalon: 'Salonshopmit@gmailcom', andress: 'Số 195, nguyễn khang, yên hoà, cầu giấy ', status: true },
      ]
    )
  }
}
