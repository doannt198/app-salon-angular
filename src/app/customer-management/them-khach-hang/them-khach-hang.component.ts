import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { AddbookingService } from 'src/services/addbooking.service';
interface Booking {
  name: string,
  code: string,
}
@Component({
  selector: 'app-them-khach-hang',
  templateUrl: './them-khach-hang.component.html',
  styleUrls: ['./them-khach-hang.component.scss']
})
export class ThemKhachHangComponent implements OnInit {
  cities: Booking[];
  status:string;
  selectedbooking: Booking;
  addbooking:any=[];
  constructor(private getaddbooking:AddbookingService) { }

  ngOnInit(): void {
    this.cities = [
      {name: 'Salon 1', code: 'NY'},
      {name: 'Salon 2', code: 'RM'},
      {name: 'Salon 3', code: 'LDN'},
      {name: 'Salon 4', code: 'IST'},
      {name: 'Salon 5', code: 'PRS'}
  ];
  this.getaddBooking()
  }
  getaddBooking(){
    this.getaddbooking.getaddbooking().subscribe(respone=>this.addbooking=respone)
  }
  }

