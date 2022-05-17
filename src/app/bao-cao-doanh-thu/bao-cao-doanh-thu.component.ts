import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import {MenuItem} from 'primeng/api'
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/services/api.service';
interface Status{
  name: string
}
@Component({
  selector: 'app-bao-cao-doanh-thu',
  templateUrl: './bao-cao-doanh-thu.component.html',
  styleUrls: ['./bao-cao-doanh-thu.component.scss']
})
export class BaoCaoDoanhThuComponent implements OnInit {
  cities1: Status[];
  cities2: Status[];
  cities3: Status[];
  selectedCity1: Status;
  selectedCity2: Status;
  selectedCity3: Status;
  items: SelectItem[];
  items1: MenuItem[];
  activeItem: MenuItem;
  databooking:any= [];
  constructor(
    private apiService: ApiService,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    this.cities1 = [
      { name: 'Tuần này' },
      { name: 'Tháng này' },
      { name: '3 tháng gần đây' },
    ];
    this.cities2 = [
      { name: 'Tất cả ' },
      { name: 'Hoàn thành' },
      { name: 'Đã hủy' },
    ];
    this.cities3 = [
      { name: 'Tất cả ' },
      { name: 'Online' },
      { name: 'Office' },
    ];
   this.getBaocaodoanhthu()
  }
  getBaocaodoanhthu(){
    this.apiService.getBaocaodoanhthu().subscribe(reponse=>{this.databooking=reponse})
  }
}
