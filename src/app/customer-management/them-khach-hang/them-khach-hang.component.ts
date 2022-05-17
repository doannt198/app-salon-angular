import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { ApiService } from 'src/services/api.service';
interface Booking {
  name: string
}
@Component({
  selector: 'app-them-khach-hang',
  templateUrl: './them-khach-hang.component.html',
  styleUrls: ['./them-khach-hang.component.scss'],
  providers: [MessageService]
})
export class ThemKhachHangComponent implements OnInit {
  thanhpho: Booking[];
  quan: Booking[];
  phuong: Booking[];
  status:string;
  selectedthanhpho: Booking;
  selectedquan: Booking;
  selectedphuong: Booking;
  addbooking:any=[];
  infokhachhang: any = {
    makhachhang:'',
    tenkhachhang: '',
    email: '',
    sodienthoai: '',
  };
  constructor(
    private apiService: ApiService,
    private messageService: MessageService, 
    private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {

    this.thanhpho = [
      {name: 'Hà Nội' },
      {name: 'TP.Hồ Chí Minh' },
      {name: 'Đà Nẵng'},
      {name: 'Hải Phòng'},
      {name: 'Bắc Ninh'}
  ];
    this.quan = [
      {name: 'Hai Bà Trưng' },
      {name: 'Hoàng Mai' },
      {name: 'Đống Đa'},
      {name: 'Cầu giấy'},
      {name: 'Thanh Xuân'}
  ];
    this.phuong = [
      {name: 'Minh Khai' },
      {name: 'Tương Mai' },
      {name: 'Tân Mai'},
      {name: 'Trương Định'},
      {name: 'Mỹ Đình'}
  ];
  this.getaddBooking()
  this.primengConfig.ripple = true;
  }
  getaddBooking(){
    this.apiService.getaddbooking().subscribe(respone=>this.addbooking=respone)
  }
  onSubmit(){
    this.messageService.add({severity:'success', summary: 'Thành công', detail: 'Lưu thành công'});
  }
  }

