import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api'
@Component({
  selector: 'app-gan-du-lieu-tho',
  templateUrl: './gan-du-lieu-tho.component.html',
  styleUrls: ['./gan-du-lieu-tho.component.scss']
})
export class GanDuLieuThoComponent implements OnInit {
  value2: string;
  city: string;
  items: MenuItem[];
  activeItem: MenuItem; 
  selectedCities: string[] = [];
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
