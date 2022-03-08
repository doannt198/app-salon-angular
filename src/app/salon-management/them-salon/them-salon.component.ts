import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-them-salon',
  templateUrl: './them-salon.component.html',
  styleUrls: ['./them-salon.component.scss'],
  providers: [MessageService]
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
  constructor(private messageService: MessageService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.items = [
      {label: 'Thông tin', routerLink:'/them-salon'},
      {label: 'Gán dữ liệu',routerLink:'/gan-du-lieu-salon' },
      {label: 'Giới thiệu', routerLink:'/gioi-thieu-salon' },
      {label: 'Quản lý Salon',routerLink:'/quan-ly-salon'}
  ];
  this.primengConfig.ripple = true;
}
onSubmit(){
  this.messageService.add({severity:'success', summary: 'Thành công', detail: 'Lưu thành công'});
}
}