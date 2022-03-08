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
  infovoucher: any = {
    mavoucher: '',
    tenvouher: '',
    salon: '',
    noidung: '',
    startday: true,
    endday: true,
    giam: '',
  };
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Thông tin', routerLink:'/them-voucher'},
      {label: 'Gán dữ liệu', routerLink:'/gan-du-lieu-voucher'},
  ];
    this.activeItem = this.items[0];
  }
  onSubmit(){
    alert("Lưu Voucher thành công!")
  }
}
