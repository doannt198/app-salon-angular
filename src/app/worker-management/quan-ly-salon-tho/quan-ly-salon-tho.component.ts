import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { SalonService } from 'src/services/salon.service';
import * as queryString from 'query-string';
@Component({
  selector: 'app-quan-ly-salon-tho',
  templateUrl: './quan-ly-salon-tho.component.html',
  styleUrls: ['./quan-ly-salon-tho.component.scss']
})
export class QuanLySalonThoComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  status:string;
  details:any;
  salondetails:any;
  query = {
    PageIndex: 1,
    PageSize: 10,
  };
  constructor(private salonservice: SalonService) { }

  ngOnInit(): void {
    this.getSalon()
  }
  getSalon() {
    const params = queryString.stringify(this.query);
    this.salonservice.getSalon(params)
      .subscribe(response => {
        this.details = response.data;
        console.log(response.data)
      })
  }
  showDetail(item:any){
    this.salondetails=item;
  }
}
