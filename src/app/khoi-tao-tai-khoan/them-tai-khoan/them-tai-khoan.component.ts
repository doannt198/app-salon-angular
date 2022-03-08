import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-them-tai-khoan',
  templateUrl: './them-tai-khoan.component.html',
  styleUrls: ['./them-tai-khoan.component.scss'],
  providers: [MessageService]
})
export class ThemTaiKhoanComponent implements OnInit {
  value2: string;
  city: string;
  items: MenuItem[];
  activeItem: MenuItem;
  infokhachhang: any = {
    tenkhachhang: '',
    email: '',
    matkhau: '',
    sodienthoai: '',
    trangthai:'',
  };
  constructor(private messageService: MessageService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.items = [
      {label: 'Thông tin' ,routerLink:'/them-tai-khoan'},
      {label: 'Gán dữ liệu', routerLink:'/gan-du-lieu'}
  ];
    this.activeItem = this.items[0];
    this.primengConfig.ripple = true;
  }
  onSubmit(){
    this.messageService.add({severity:'success', summary: 'Thành công', detail: 'Lưu thành công'});
    /* alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model)); */
  }
}
