import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { TRISTATECHECKBOX_VALUE_ACCESSOR } from 'primeng/tristatecheckbox';
import { KhoitaotaikhoanService } from 'src/services/khoitaotaikhoan.service';

interface City {
  name: string
}
@Component({
  selector: 'app-khoi-tao-tai-khoan',
  templateUrl: './khoi-tao-tai-khoan.component.html',
  styleUrls: ['./khoi-tao-tai-khoan.component.scss']
})
export class KhoiTaoTaiKhoanComponent implements OnInit {
  cities: City[];
  selectedCity2: City;
  items: SelectItem[];
  items1: MenuItem[];
  activeItem: MenuItem;
  datataikhoan:any =[];
  constructor( private khoitaotaikhoan:KhoitaotaikhoanService) { }
  ngOnInit(): void {
    this.items = [];
    for (let i = 0; i < 10000; i++) {
      this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
    }
    this.cities = [
      { name: 'Tất cả' },
      { name: 'Đang hoạt động ' },
      { name: 'Dừng hoạt động' },

    ];
    this.items1 = [
      {label: 'Lĩnh vực'},
      {label: 'Dịch vụ'},
  ];
    this.activeItem = this.items[0];
    this.getKhoitao();
  }
  getKhoitao(){
    this.khoitaotaikhoan.getKhoitaotaikhoan().subscribe(reponse=>{this.datataikhoan=reponse})
  }
}
