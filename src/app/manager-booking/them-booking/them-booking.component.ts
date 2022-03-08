import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { AddbookingService } from 'src/services/addbooking.service';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
interface Booking {
  name: string
}
interface Tho {
  tentho: string,
}
@Component({
  selector: 'app-them-booking',
  templateUrl: './them-booking.component.html',
  styleUrls: ['./them-booking.component.scss'],
  providers: [MessageService]
})
export class ThemBookingComponent implements OnInit {
  cities: Booking[];
  tho:Tho[]
  status:string;
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
  constructor(private getaddbooking:AddbookingService,private messageService: MessageService, private primengConfig: PrimeNGConfig) { }
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
  this.primengConfig.ripple = true;
  }
  onSubmit(){
    this.messageService.add({severity:'success', summary: 'Thành công', detail: 'Lưu thành công'});
  }
  getaddBooking(){
    this.getaddbooking.getaddbooking().subscribe(respone=>this.addbooking=respone)
  }
}
