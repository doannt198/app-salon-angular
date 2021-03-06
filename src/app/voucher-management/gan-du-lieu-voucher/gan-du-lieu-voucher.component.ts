import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api'
@Component({
  selector: 'app-gan-du-lieu-voucher',
  templateUrl: './gan-du-lieu-voucher.component.html',
  styleUrls: ['./gan-du-lieu-voucher.component.scss']
})
export class GanDuLieuVoucherComponent implements OnInit {
  value2: string;
  city: string;
  items: MenuItem[];
  activeItem: MenuItem; 
  selectedCities: string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Thông tin' ,routerLink:'/them-voucher'},
      {label: 'Gán dữ liệu', routerLink:'/gan-du-lieu-voucher'}
  ];
  }

}
