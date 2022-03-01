import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  constructor( private router:Router) { }

  ngOnInit(): void {
    
    this.items = [
      {label: 'Báo cáo', routerLink:'/report'},
      {label: 'Quản lý booking',routerLink:'/managerbooking' },
      {label: 'Quản lý khách hàng', routerLink:'/managementcustomer'},
      {label: 'Quản lý Salon ', routerLink:'/managementsalon'},
      {label: 'Quản lý thợ ',routerLink:'/managementworker'},
      {label: 'Quản lý Voucher',routerLink:'/managementvoucher'}
  ];
  this.activeItem = this.items[0];
  }

}
