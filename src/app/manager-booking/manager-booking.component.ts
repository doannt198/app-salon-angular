import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/services/api.service';
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
    private apiService: ApiService,
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
    this.apiService.getBookings()
      .subscribe(
        response => {
          this.databooking = response;
        }
      )
  }
}
