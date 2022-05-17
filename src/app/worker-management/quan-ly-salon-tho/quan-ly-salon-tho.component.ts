import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import * as queryString from 'query-string';
import { ApiService } from 'src/services/api.service';
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
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getSalon()
  }
  getSalon() {
    const params = queryString.stringify(this.query);
    this.apiService.getSalon(params)
      .subscribe(response => {
        this.details = response.data;
        console.log(response.data)
      })
  }
  showDetail(item:any){
    this.salondetails=item;
  }
}
