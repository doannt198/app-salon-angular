import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { MenuItem } from 'primeng/api'
import * as queryString from 'query-string';
import { DichVuService } from '../../../services/dich-vu.service'
interface City {
  name: string
}
@Component({
  selector: 'app-dich-vu',
  templateUrl: './dich-vu.component.html',
  styleUrls: ['./dich-vu.component.scss']
})
export class DichVuComponent implements OnInit {
  cities: City[];
  selectedCity2: City;
  items: SelectItem[];
  items1: MenuItem[];
  activeItem: MenuItem;
  datadichvu: any = []
  query = {
    getReaml: 1
  }
  constructor(private dichvuservice:DichVuService) { }

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
      { label: 'Lĩnh vực', routerLink: '/linhvuc-dichvu' },
      { label: 'Dịch vụ', routerLink: '/dich-vu' },
    ];
    this.activeItem = this.items[0];
    this.getDichVu();
  }
  getDichVu() {
    const params = queryString.stringify(this.query);
    this.dichvuservice.getDichVu(params).subscribe(response => {
      console.log(response.data)
      this.datadichvu = response.data;
    })
  }

}
