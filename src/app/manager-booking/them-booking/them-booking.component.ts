import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { AddbookingService } from 'src/services/addbooking.service';
interface Booking {
  name: string
}
interface Tho {
  tentho: string,
}
@Component({
  selector: 'app-them-booking',
  templateUrl: './them-booking.component.html',
  styleUrls: ['./them-booking.component.scss']
})
export class ThemBookingComponent implements OnInit {
  cities: Booking[];
  tho:Tho[]
  status:string;
  selectedbooking: Booking;
  selectedtho:Tho;
  addbooking:any=[];
  infobooking:any={
    tensalon:'',
    mabooking:'',
    tho:'',
    ngaycheckin:'',
    ngaycheckout:'',
    tenkhachhang:'',
    sodienthoai:'',
    email:'',
    status:''
  }
  constructor(private getaddbooking:AddbookingService) { }
  ngOnInit(): void {
    this.cities = [
      {name: 'Salon 1'},
      {name: 'Salon 2'},
      {name: 'Salon 3'},
      {name: 'Salon 4'},
      {name: 'Salon 5'}
  ];
    this.tho = [
      {tentho:'Nguyễn Văn A'},
      {tentho:'Nguyễn Văn B'},
      {tentho:'Nguyễn Tiến D'},

  ];
  this.getaddBooking()
  }
  onSubmit(){
    alert("Lưu thành công")
  }
  getaddBooking(){
    this.getaddbooking.getaddbooking().subscribe(respone=>this.addbooking=respone)
  }
}
