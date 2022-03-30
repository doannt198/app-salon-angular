import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { BookingService } from 'src/services/booking.service';
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
  constructor(
    private bookingService: BookingService
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
