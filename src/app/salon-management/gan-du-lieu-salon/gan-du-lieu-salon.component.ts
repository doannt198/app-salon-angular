import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api'
@Component({
  selector: 'app-gan-du-lieu-salon',
  templateUrl: './gan-du-lieu-salon.component.html',
  styleUrls: ['./gan-du-lieu-salon.component.scss']
})
export class GanDuLieuSalonComponent implements OnInit {
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
