import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import {MenuItem} from 'primeng/api'
interface City {
  name: string
}
@Component({
  selector: 'app-gan-du-lieu',
  templateUrl: './gan-du-lieu.component.html',
  styleUrls: ['./gan-du-lieu.component.scss']
})
export class GanDuLieuComponent implements OnInit {
  value2: string;
  city: string;
  items: MenuItem[];
  activeItem: MenuItem; 
  selectedCities: string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Thông tin' ,routerLink:'/them-tai-khoan'},
      {label: 'Gán dữ liệu', routerLink:'/gan-du-lieu'}
  ];
    this.activeItem = this.items[0];
  }
}
