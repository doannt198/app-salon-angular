import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api'
@Component({
  selector: 'app-them-salon',
  templateUrl: './them-salon.component.html',
  styleUrls: ['./them-salon.component.scss']
})
export class ThemSalonComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  status:string;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Thông tin', },
      {label: 'Gán dữ liệu', },
      {label: 'Giới thiệu', },
      {label: 'Quản lý Salon'}
  ];
}
}