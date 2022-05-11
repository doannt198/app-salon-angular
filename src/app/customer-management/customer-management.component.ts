import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/services/customer.service';
import {MenuItem} from 'primeng/api'
import * as queryString from 'query-string';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.scss']
})
export class CustomerManagementComponent implements OnInit {
  multipleSelection = [];
  items: MenuItem[];
  activeItem: MenuItem;
  datakhachhang:any=[];
  datatotalRecord:any;
  totalRecord = 0;
  query: any = {
    PageIndex: 1,
    PageSize: 20,
    Search: '',
    isOnline:''
  };
  constructor(
    private customer :CustomerService,
    private spinner: NgxSpinnerService) { 
    }
  ngOnInit(): void {
    this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
    this.items = [
      {label: 'Tất cả'},
      {label: 'Online'},
      {label: 'Office'}
  ];
    this.activeItem = this.items[0];
    this.getCustomer();
  }
  getCustomer(){
    const params = queryString.stringify(this.query);
    this.customer.getCustomer(params)
      .subscribe(response => {
        this.datakhachhang = response.data
        if (this.datakhachhang && this.datakhachhang.length) {
          this.totalRecord = this.datakhachhang[0].totalRecord;
        }
      })
  }
  paginate(event: any): void {
    this.query.PageIndex = event.page + 1;
    this.query.PageSize = event.rows;
    this.getCustomer();
  }

  handleChange(e: any) {
    // var index = e.index;
    console.log(e);
    if (e.index === 1) {
      this.query.isOnline = true;
    } else if (e.index === 2) {
      this.query.isOnline = false;
    } else {
      this.query.isOnline = '';
    }
    this.getCustomer();
  }
}
