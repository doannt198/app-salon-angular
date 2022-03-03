import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api'
import { VoucherService } from 'src/services/voucher.service';
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
      this.voucherService.getVoucher().subscribe(reponse=>{this.datavoucher=reponse})
    }
}
