import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
interface Status {
  name: string
}
@Component({
  selector: 'app-them-thong-bao',
  templateUrl: './them-thong-bao.component.html',
  styleUrls: ['./them-thong-bao.component.scss'],
  providers: [MessageService]
})
export class ThemThongBaoComponent implements OnInit {
  items: MenuItem[];
  phamvi: MenuItem[];
  activeItem: MenuItem;
  selectedCity1: Status;
  infothongbao: any = {
    tieude:'',
    thơigianapdung:'',
    mota:'',
    infothongbao:'',
    noidungthongbao:''
  };
  constructor(private messageService: MessageService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.items = [
      {label: 'Tất cả'},
      {label: 'Khách hàng'},
      {label: 'Salon'},
      {label: 'Thợ'}
  ];
    this.phamvi = [
      {label: 'Tất cả'},
      {label: 'Chọn người gửi'},
  ];
    this.activeItem = this.items[0];
    this.primengConfig.ripple = true;
  }
  onSubmit(){
    this.messageService.add({severity:'success', summary: 'Thành công', detail: 'Thêm thành công'});
  }
}
