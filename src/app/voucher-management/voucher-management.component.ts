import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api'
import { VoucherService } from 'src/services/voucher.service';
import * as queryString from 'query-string';
import * as moment from 'moment';
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
  query={
    PageIndex:1,
    PageSize:10,
    from:'',
    to:'',
    Search:''
  }
  constructor(private voucherService:VoucherService) { }

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
      if (typeof this.query.from !== 'string' && typeof this.query.to !== 'string') {
        this.query.from = moment(this.query.from).format('YYYY-MM-DD HH:mm');
        this.query.to = moment(this.query.to).format('YYYY-MM-DD HH:mm');
        }
      const params = queryString.stringify(this.query);
      console.log(params)
      this.voucherService.getVoucher(params).subscribe(response => {
        this.datavoucher = response.data;
        if (this.datavoucher && this.datavoucher.length) {
          this.totalRecord = this.datavoucher[0].totalRecord;
        }
      })
    }
    paginate(event: any): void {
      this.query.PageIndex = event.first + 1;
      this.query.PageSize = event.rows;
      this.getVoucher();
    }
  }

