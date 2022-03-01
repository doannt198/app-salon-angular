import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api'
@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.scss']
})
export class CustomerManagementComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  datakhachhang = [
    { id: 'JGD345VE', name: 'Nguyễn Hoàng Yến', phone: '034 034 3947', email: 'Hoangyen9983@gmail.com', andress: '13 Pháo Đài Láng, Đống Đa, Hà Nội ', status: true },
    { id: 'JGD345VE', name: 'Võ Thanh Mai', phone: '034 846 5874', email: 'Thanhmai223@gmail.com', andress: '13 Pháo Đài Láng, Đống Đa, Hà Nội ', status: true },
    { id: 'JGD345VE', name: 'Nguyễn Thị Hoàn', phone: '039 948 7647', email: 'Moandla3333@gmail.com', andress: '13 Pháo Đài Láng, Đống Đa, Hà Nội ', status: true },
    { id: 'JGD345VE', name: 'Võ Yến Nhi', phone: '034 309 8463', email: 'Yen23nhi@gmail.com', andress: '13 Pháo Đài Láng, Đống Đa, Hà Nội ', status: true },
    { id: 'JGD345VE', name: 'Đặng Thị Kim Yến', phone: '034 098 8988', email: 'Kimyen0176@gmail.com', andress: '13 Pháo Đài Láng, Đống Đa, Hà Nội ', status: true },
    { id: 'JGD345VE', name: 'Nguyễn Phương Trinh', phone: '034 093 8764', email: 'Trinh09121998', andress: '13 Pháo Đài Láng, Đống Đa, Hà Nội ', status: true },
  ]
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Tất cả'},
      {label: 'Online'},
      {label: 'Office'}
  ];
    this.activeItem = this.items[0];
  }

}
