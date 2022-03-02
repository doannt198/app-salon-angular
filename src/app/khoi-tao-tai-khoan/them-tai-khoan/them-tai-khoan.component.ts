import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-them-tai-khoan',
  templateUrl: './them-tai-khoan.component.html',
  styleUrls: ['./them-tai-khoan.component.scss']
})
export class ThemTaiKhoanComponent implements OnInit {
  value2: string;
  city: string;
  items: MenuItem[];
  activeItem: MenuItem;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Thông tin' ,routerLink:'/them-tai-khoan'},
      {label: 'Gán dữ liệu', routerLink:'/gan-du-lieu'}
  ];
    this.activeItem = this.items[0];
  }

}
