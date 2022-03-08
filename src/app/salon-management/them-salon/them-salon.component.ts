import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MenuItem} from 'primeng/api'
@Component({
  selector: 'app-them-salon',
  templateUrl: './them-salon.component.html',
  styleUrls: ['./them-salon.component.scss']
})
export class ThemSalonComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  status:string;
  infosalon: any = {
    masalon:'',
    tensalon: '',
    thanhpho:'',
    quan:'',
    phuong:'',
    diachichitiet:'',
    email: '',
    sodienthoai: '',
    ngaysinh:'',
    trangthaibooking:'',
    trangthaidoisoat:'',
  };
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Thông tin', routerLink:'/them-salon'},
      {label: 'Gán dữ liệu',routerLink:'/gan-du-lieu-salon' },
      {label: 'Giới thiệu', routerLink:'/gioi-thieu-salon' },
      {label: 'Quản lý Salon',routerLink:'/quan-ly-salon'}
  ];
}
onSubmit(){
  alert("Thêm thành công!")
}
}