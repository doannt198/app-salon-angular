import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { AddbookingService } from 'src/services/addbooking.service';
interface Booking {
  name: string
}
@Component({
  selector: 'app-them-khach-hang',
  templateUrl: './them-khach-hang.component.html',
  styleUrls: ['./them-khach-hang.component.scss']
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
  constructor(private getaddbooking:AddbookingService) { }

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
  }
  getaddBooking(){
    this.getaddbooking.getaddbooking().subscribe(respone=>this.addbooking=respone)
  }
  onSubmit(){
    alert("Lưu thành công!")
  }
  }

