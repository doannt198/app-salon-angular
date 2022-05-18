import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-them-khach-hang',
  templateUrl: './them-khach-hang.component.html',
  styleUrls: ['./them-khach-hang.component.scss'],
  providers: [MessageService]
})
export class ThemKhachHangComponent implements OnInit {
  
 
  constructor(
    private apiService: ApiService,
    private messageService: MessageService, 
    private primengConfig: PrimeNGConfig) { }
    status:string;
    addbooking:any=[];
    city: any[] = [];
    ward: any[] = [];
    district: any[] = []
    infoKhachHang: any = {
      maKhachHang:'',
      tenKhachHang: '',
      email: '',
      soDienThoai: '',
      thanhPho: '',
      quan: '',
      phuong: ''
    };

  ngOnInit(): void {
  this.getAllCity();
  this.primengConfig.ripple = true;
  }
 
  onSubmit(){
    console.log(this.infoKhachHang)
    this.messageService.add({severity:'success', summary: 'Thành công', detail: 'Lưu thành công'});
  }
  getAllCity() {
    this.apiService.getAllCity().pipe()
    .subscribe({
      next: (res)=>{
      
        this.city = res.data
        console.log("city", this.city)
      },
      error: (err)=> {
        console.log("error", err)
      }
    })
  }

  getDistrict(event:any) {
    this.apiService.getDistrict(event.value).pipe()
    .subscribe({
      next: (res)=>{
      
        this.district = res.data
        console.log("ward", this.city)
      },
      error: (err)=> {
        console.log("error", err)
      }
    })
  } 

  getWard(event:any) {
    this.apiService.getWard(event.value).pipe()
    .subscribe({
      next: (res)=>{
      
        this.ward = res.data
        console.log("ward", this.city)
      },
      error: (err)=> {
        console.log("error", err)
      }
    })
  } 
  }

