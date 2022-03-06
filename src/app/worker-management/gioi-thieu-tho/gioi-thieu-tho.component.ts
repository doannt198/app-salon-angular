import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api'
@Component({
  selector: 'app-gioi-thieu-tho',
  templateUrl: './gioi-thieu-tho.component.html',
  styleUrls: ['./gioi-thieu-tho.component.scss']
})
export class GioiThieuThoComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  status:string;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Thông tin', routerLink:'/them-tho'},
      {label: 'Gán dữ liệu', routerLink:'/gan-du-lieu-tho'},
      {label: 'Giới thiệu', routerLink:'/gioi-thieu-tho'},
      {label: 'Quản lý Salon',routerLink:'/quan-ly-salon-tho'},

  ];
    this.activeItem = this.items[0];
  }

}
