import { Component, OnInit } from '@angular/core';
import { AddbookingService } from 'src/services/addbooking.service';
interface Booking {
  name: string,
  code: string,
}
@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.scss']
})
export class BookingDetailComponent implements OnInit {
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
