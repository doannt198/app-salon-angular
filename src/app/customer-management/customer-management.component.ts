import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/services/customer.service';
import {MenuItem} from 'primeng/api'
import { Customer } from '../model/customer.model';
@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.scss']
})
export class CustomerManagementComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  datakhachhang:Customer[]=[];
  constructor(private customer :CustomerService) { }

  ngOnInit(): void {
    this.items = [
      {label: 'Tất cả'},
      {label: 'Online'},
      {label: 'Office'}
  ];
    this.activeItem = this.items[0];
    this.getCustomer();
  }
  getCustomer(){
      this.customer.getCustomer(1,10)
      .subscribe((response:any)=> {
        this.datakhachhang=response.data;
      })
  }
}
