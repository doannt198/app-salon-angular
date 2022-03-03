import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor() { }

  getWorker() {
    return of([
      { id: 'JGD345VE', name: 'Nguyễn Hoàng Yến', phone: '034 034 3947', email: 'Hoagyen0387@gmailcomm', andress: 'Số 195, nguyễn khang, yên hoà, cầu giấy ', status: "đang hoạt động" },
      { id: 'JGD345VE', name: 'Võ Thanh Mai', phone: '034 846 5874', email: 'Hoagyen0387@gmailcomm', andress: 'Số 195, nguyễn khang, yên hoà, cầu giấy ', status: "đang hoạt động" },
      { id: 'JGD345VE', name: 'Nguyễn Thị Hoàn ', phone: '039 948 7647', email: 'Hoagyen0387@gmailcomm', andress: 'Số 195, nguyễn khang, yên hoà, cầu giấy ', status: "đang hoạt động" },
      { id: 'JGD345VE', name: 'Võ Yến Nhi', phone: '034 309 8463', email: 'Hoagyen0387@gmailcomm', andress: 'Số 195, nguyễn khang, yên hoà, cầu giấy', status: "đang hoạt động" },
      { id: 'JGD345VE', name: 'Đặng Thị Kim Yến', phone: '034 098 8988', email: 'Hoagyen0387@gmailcomm', andress: 'Số 195, nguyễn khang, yên hoà, cầu giấy', status: "đang hoạt động" },
      { id: 'JGD345VE', name: 'Nguyễn Phương Trình', phone: '034 093 8764', email: 'Hoagyen0387@gmailcomm', andress: 'Số 195, nguyễn khang, yên hoà, cầu giấy ', status: "đang hoạt động" },
    ]
    )
  }
}
