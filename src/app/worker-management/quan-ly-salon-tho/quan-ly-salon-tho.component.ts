import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api'
@Component({
  selector: 'app-quan-ly-salon-tho',
  templateUrl: './quan-ly-salon-tho.component.html',
  styleUrls: ['./quan-ly-salon-tho.component.scss']
})
export class QuanLySalonThoComponent implements OnInit {
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
