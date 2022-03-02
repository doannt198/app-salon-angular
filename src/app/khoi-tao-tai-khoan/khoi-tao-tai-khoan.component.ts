import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import {MenuItem} from 'primeng/api'
interface City {
  name: string
}
@Component({
  selector: 'app-khoi-tao-tai-khoan',
  templateUrl: './khoi-tao-tai-khoan.component.html',
  styleUrls: ['./khoi-tao-tai-khoan.component.scss']
})
export class KhoiTaoTaiKhoanComponent implements OnInit {
  cities: City[];
  selectedCity2: City;
  items: SelectItem[];
  items1: MenuItem[];
  activeItem: MenuItem;
  datataikhoan = [
    { email: "Hoagyen0387@gmailcomm", hoten: 'Nguyễn Hoàng Yến', phone: '034 034 3947', vaitro: 'HCNS', timedangky: '30/9/2021 08:00', status: true },
    { email: "Hoagyen0387@gmailcomm", hoten: 'Võ Thanh Mai', phone: '034 846 5874', vaitro: 'KETOAN', timedangky: '30/9/2021 08:00', status: false },
    { email: "Hoagyen0387@gmailcomm", hoten: 'Nguyễn Thị Hoàn', phone: '039 948 7647', vaitro: 'User 3', timedangky: '30/9/2021 08:00', status: true },
    { email: "Hoagyen0387@gmailcomm", hoten: 'Võ Yến Nhi', phone: '034 309 8463', vaitro: 'User1:', timedangky: '5/9/2021 08:00', status: false },
    { email: "Hoagyen0387@gmailcomm", hoten: 'Đặng Thị Kim Yến', phone: '034 098 8988', vaitro: 'User 1', timedangky: '30/9/2021 08:00', status: false },
    { email: "Hoagyen0387@gmailcomm", hoten: 'Nguyễn Phương Trinh', phone: '034 093 8764', vaitro: 'User 1', timedangky: '30/9/2021 08:00', status: true },
  ]
  constructor() { }
  ngOnInit(): void {
    this.items = [];
    for (let i = 0; i < 10000; i++) {
      this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
    }
    this.cities = [
      { name: 'Tất cả' },
      { name: 'Đang hoạt động ' },
      { name: 'Dừng hoạt động' },

    ];
    this.items1 = [
      {label: 'Lĩnh vực'},
      {label: 'Dịch vụ'},
  ];
    this.activeItem = this.items[0];
  }

}
