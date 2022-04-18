import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api'
import { VoucherService } from 'src/services/voucher.service';
import * as queryString from 'query-string';
import * as moment from 'moment';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-voucher-management',
  templateUrl: './voucher-management.component.html',
  styleUrls: ['./voucher-management.component.scss']
})
export class VoucherManagementComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  val2: number = 3;
  datavoucher:any=[];
  totalRecord=0;
  query:any={
    PageIndex:1,
    PageSize:10,
    from:'',
    to:'',
    Search:'',
    IsShowInSalon:'',
    IsShowInHome:''
  }
  constructor(private voucherService:VoucherService,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.items = [
      {label: 'Tất cả'},
      {label: 'Home'},
      {label: 'Salon'}   
  ];
    this.activeItem = this.items[0];
    this.getVoucher();
  }
    getVoucher(){
      this.spinner.show();
      if (typeof this.query.from !== 'string' && typeof this.query.to !== 'string') {
        this.query.from = moment(this.query.from).format('YYYY-MM-DD HH:mm');
        this.query.to = moment(this.query.to).format('YYYY-MM-DD HH:mm');
        }
      const params = queryString.stringify(this.query);
      this.voucherService.getVoucher(params).subscribe(response => {
        this.datavoucher = response.data;
        if (this.datavoucher && this.datavoucher.length) {
          this.totalRecord = this.datavoucher[0].totalRecord;
        }
      })
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
    }
    paginate(event: any): void {
      this.query.PageIndex = event.first + 1;
      this.query.PageSize = event.rows;
      this.getVoucher();
    }

    handleChange(e: any) {
      // var index = e.index;
    console.log(e)
      if (e.index === 1) {
        this.query.IsShowInHome = true;
        this.query.IsShowInSalon = false;
      } else if (e.index === 2) {
        this.query.IsShowInSalon = true;
        this.query.IsShowInHome = false;
      } else {
        this.query.IsShowInSalon = "";
        this.query.IsShowInHome = "";
      } 
      this.getVoucher();
    }
  }

