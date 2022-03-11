import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-voucher-detail',
  templateUrl: './voucher-detail.component.html',
  styleUrls: ['./voucher-detail.component.scss']
})
export class VoucherDetailComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  id:number=0;
  detail:any
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Thông tin',routerLink:'/them-voucher'},
      {label: 'Gán dữ liệu',routerLink:'/gan-du-lieu-voucher'},
  ];
  
  }

}
