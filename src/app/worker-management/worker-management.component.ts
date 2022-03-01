import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api'
@Component({
  selector: 'app-worker-management',
  templateUrl: './worker-management.component.html',
  styleUrls: ['./worker-management.component.scss']
})
export class WorkerManagementComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  val2: number = 3;
  datasalon = [
    { id: 'JGD345VE', name: 'Nguyễn Hoàng Yến', phone: '034 034 3947', email: 'Hoagyen0387@gmailcomm', andress: 'Số 195, nguyễn khang, yên hoà, cầu giấy ', status: "đang hoạt động" },
    { id: 'JGD345VE', name: 'Võ Thanh Mai', phone: '034 846 5874', email: 'Hoagyen0387@gmailcomm', andress: 'Số 195, nguyễn khang, yên hoà, cầu giấy ', status: "đang hoạt động" },
    { id: 'JGD345VE', name: 'Nguyễn Thị Hoàn ', phone: '039 948 7647', email: 'Hoagyen0387@gmailcomm', andress: 'Số 195, nguyễn khang, yên hoà, cầu giấy ', status: "đang hoạt động" },
    { id: 'JGD345VE', name: 'Võ Yến Nhi', phone: '034 309 8463', email: 'Hoagyen0387@gmailcomm', andress: 'Số 195, nguyễn khang, yên hoà, cầu giấy', status: "đang hoạt động" },
    { id: 'JGD345VE', name: 'Đặng Thị Kim Yến', phone: '034 098 8988', email: 'Hoagyen0387@gmailcomm', andress: 'Số 195, nguyễn khang, yên hoà, cầu giấy', status: "đang hoạt động" },
    { id: 'JGD345VE', name: 'Nguyễn Phương Trình', phone: '034 093 8764', email: 'Hoagyen0387@gmailcomm', andress: 'Số 195, nguyễn khang, yên hoà, cầu giấy ', status: "đang hoạt động" },
  ]
  constructor() { }

  ngOnInit(): void { 
    this.items = [
      {label: 'Tất cả'},
      {label: 'Đang hoạt động'},
      {label: 'Dừng hoạt động'}   
  ];
    this.activeItem = this.items[0];
  }

}
