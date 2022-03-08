import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-them-voucher',
  templateUrl: './them-voucher.component.html',
  styleUrls: ['./them-voucher.component.scss'],
  providers: [MessageService]
})
export class ThemVoucherComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  infovoucher: any = {
    mavoucher: '',
    tenvouher: '',
    salon: '',
    noidung: '',
    startday: "",
    endday: "",
    giam: '',
  };
  constructor(private messageService: MessageService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.items = [
      {label: 'Thông tin', routerLink:'/them-voucher'},
      {label: 'Gán dữ liệu', routerLink:'/gan-du-lieu-voucher'},
  ];
    this.activeItem = this.items[0];
    this.primengConfig.ripple = true;
  }
  onSubmit(){
    this.messageService.add({severity:'success', summary: 'Thành công', detail: 'Lưu thành công'});
  }
}
