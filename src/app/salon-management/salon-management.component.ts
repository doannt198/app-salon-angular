import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SalonService } from 'src/services/salon.service';
import * as queryString from 'query-string';

@Component({
  selector: 'app-salon-management',
  templateUrl: './salon-management.component.html',
  styleUrls: ['./salon-management.component.scss']
})
export class SalonManagementComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  val2: number = 3;
  datasalon: any = [];
  totalRecord = 0;
  query = {
    PageIndex: 1,
    PageSize: 1,
    Search: '',
    isActive: false
  };
  constructor(private salonservice: SalonService) { }

  ngOnInit(): void {
    this.items = [
      { label: 'Tất cả' },
      { label: 'Đang hoạt động' },
      { label: 'Dừng hoạt động' }
    ];
    this.activeItem = this.items[0];
    this.getSalon();
  }
  getSalon() {
    const params = queryString.stringify(this.query);
    this.salonservice.getSalon(params)
      .subscribe(response => {
        this.datasalon = response.data;
        if (this.datasalon && this.datasalon.length) {
          this.totalRecord = this.datasalon[0].totalRecord;
        }
      })
  }

  paginate(event: any): void {
    this.query.PageIndex = event.first + 1;
    this.query.PageSize = event.rows;
    this.getSalon();
  }
}


