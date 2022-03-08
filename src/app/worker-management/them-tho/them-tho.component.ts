import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-them-tho',
  templateUrl: './them-tho.component.html',
  styleUrls: ['./them-tho.component.scss'],
  providers: [MessageService]
})
export class ThemThoComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  status:string;
  infotho:any={
    matho:'',
    tentho:'',
    sodienthoai:'',
    email:''
  }
  constructor(private messageService: MessageService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.items = [
      {label: 'Thông tin', routerLink:'/them-tho'},
      {label: 'Gán dữ liệu', routerLink:'/gan-du-lieu-tho'},
      {label: 'Giới thiệu', routerLink:'/gioi-thieu-tho'},
      {label: 'Quản lý Salon',routerLink:'/quan-ly-salon-tho'},

  ];
    this.activeItem = this.items[0];
    this.primengConfig.ripple = true;
  }
onSubmit(){
  this.messageService.add({severity:'success', summary: 'Thành công', detail: 'Lưu thành công'});
}
}
