import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import * as queryString from 'query-string';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/services/api.service';
interface City {
  name: string
  value: string
}
@Component({
  selector: 'app-notification-management',
  templateUrl: './notification-management.component.html',
  styleUrls: ['./notification-management.component.scss']
})
export class NotificationManagementComponent implements OnInit {
  multipleSelection=[];
  cities: City[];
  selectedCity2: City;
  items: SelectItem[];
  datathongbao: any = [];
  totalRecord = 0;
  query = {
    Search: '',
    type: 'All',
    PageIndex: 1,
    PageSize: 10,
  }
  constructor(private apiService: ApiService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    this.items = [];
    for (let i = 0; i < 10000; i++) {
      this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
    }
    this.cities = [
      { name: 'Tất cả', value: 'All' },
      { name: 'Khách hàng', value: 'Customer' },
      { name: 'Salon', value: 'Salon' },
      { name: 'Thợ', value: 'Technician' }
    ];
    this.getNotification();
  }
  getNotification() {
    const params = queryString.stringify(this.query);
    this.apiService.getNotification(params).subscribe({
      next: (response) => {
        this.datathongbao = response.data;
        if (this.datathongbao && this.datathongbao.length) {
          this.totalRecord = this.datathongbao[0].totalRecord;
        }
      },
      error: (error) => { console.log(error)}
    })
  }
  paginate(event: any): void {
    this.query.PageIndex = event.page + 1
    this.query.PageSize = event.rows;
    this.getNotification();
  }
}
