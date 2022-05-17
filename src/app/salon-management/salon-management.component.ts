import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import * as queryString from 'query-string';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/services/api.service';
@Component({
  selector: 'app-salon-management',
  templateUrl: './salon-management.component.html',
  styleUrls: ['./salon-management.component.scss']
})
export class SalonManagementComponent implements OnInit {
  multipleSelection=[];
  items: MenuItem[];
  activeItem: MenuItem;
  val2: number;
  datasalon: any = [];
  totalRecord = 0;
  query:any = {
    PageIndex: 1,
    PageSize: 10,
    Search: '',
    isActive: ''
  };
  constructor(private apiService: ApiService,
    private spinner: NgxSpinnerService,
    ) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
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
    this.apiService.getSalon(params)
      .subscribe(response => {
        this.datasalon = response.data;
        if (this.datasalon && this.datasalon.length) {
          this.totalRecord = this.datasalon[0].totalRecord;
        }
      })
  }
  paginate(event: any): void {
    this.query.PageIndex = event.page + 1;
    this.query.PageSize = event.rows;
    this.getSalon();
  }
  handleChange(e: any) {
    // var index = e.index;
    if (e.index === 1) {
      this.query.isActive = true;
    } else if (e.index === 2) {
      this.query.isActive = false;
    } else {
      this.query.isActive="";
    }
    this.getSalon();
  }
}


