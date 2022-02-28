import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  constructor() { }

  ngOnInit(): void {
    
    this.items = [
      {label: 'Báo cáo', },
      {label: 'Quản lý booking', },
      {label: 'Quản lý khách hàng', },
      {label: 'Quản lý Salon '},
      {label: 'Quản lý thợ '},
      {label: 'Quản lý Voucher'}
  ];
  this.activeItem = this.items[0];
  }

}
