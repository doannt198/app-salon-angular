import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api'
@Component({
  selector: 'app-quan-ly-tho',
  templateUrl: './quan-ly-tho.component.html',
  styleUrls: ['./quan-ly-tho.component.scss']
})
export class QuanLyThoComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  status:string;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Thông tin', routerLink:'them-salon'},
      {label: 'Gán dữ liệu',routerLink:'gan-du-lieu-salon' },
      {label: 'Giới thiệu', routerLink:'gioi-thieu-salon' },
      {label: 'Quản lý Salon',routerLink:'quan-ly-salon'}
  ];
  }

}
