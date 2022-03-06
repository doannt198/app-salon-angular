import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
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
      {label: 'Thông tin', routerLink:'/them-salon'},
      {label: 'Gán dữ liệu',routerLink:'/gan-du-lieu-salon' },
      {label: 'Giới thiệu', routerLink:'/gioi-thieu-salon' },
      {label: 'Quản lý Salon',routerLink:'/quan-ly-salon'}
  ];
}
}