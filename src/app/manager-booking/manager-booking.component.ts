import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import * as queryString from 'query-string';
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
  cities: City[];
  selectedCity2: City;
  items: SelectItem[];
  databooking: any = [];
  spinnerType:string;
  spinnerName:string;
  query = {
    PageIndex: 1,
    PageSize: 10
  }
  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    this.lstBookingFilter()
  }
  lstBookingFilter() {
    const params = queryString.stringify(this.query)
    this.apiService.lstBookingFilter(params)
    .pipe()
    .subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    }) 
  }
}
