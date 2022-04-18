import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { BookingService } from 'src/services/booking.service';
import { NgxSpinnerService } from 'ngx-spinner';
interface City {
  name: string
}
@Component({
  selector: 'app-manager-booking',
  templateUrl: './manager-booking.component.html',
  styleUrls: ['./manager-booking.component.scss'],
})
export class ManagerBookingComponent implements OnInit {
  cities: City[];
  selectedCity2: City;
  items: SelectItem[];
  databooking: any = [];
  spinnerType:string;
  spinnerName:string;
  constructor(
    private bookingService: BookingService,
    private spinner: NgxSpinnerService,
  ) {
    
    this.cities = [
      { name: 'Tất cả' },
      { name: 'Chờ duyệt ' },
      { name: 'Check in' },
      { name: 'Đã hủy' },
      { name: 'Hoàn thành' }
    ];
 
  }
  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    this.getBookings(); 
  }
  getBookings() {
    this.bookingService.getBookings()
      .subscribe(
        response => {
          this.databooking = response;
        }
      )
  }
}
