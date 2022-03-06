import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api'
@Component({
  selector: 'app-them-voucher',
  templateUrl: './them-voucher.component.html',
  styleUrls: ['./them-voucher.component.scss']
})
export class ThemVoucherComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Thông tin', routerLink:'/them-voucher'},
      {label: 'Gán dữ liệu', routerLink:'/gan-du-lieu-voucher'},
  ];
    this.activeItem = this.items[0];
  }

}
