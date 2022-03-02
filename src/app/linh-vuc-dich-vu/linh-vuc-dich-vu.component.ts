import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import {MenuItem} from 'primeng/api'
interface City {
  name: string
}
@Component({
  selector: 'app-linh-vuc-dich-vu',
  templateUrl: './linh-vuc-dich-vu.component.html',
  styleUrls: ['./linh-vuc-dich-vu.component.scss']
})
export class LinhVucDichVuComponent implements OnInit {
  cities: City[];
  selectedCity2: City;
  items: SelectItem[];
  items1: MenuItem[];
  activeItem: MenuItem;
  datadichvu = [
    { index: 1, iddichvu: 'LVNAILS', namedichvu: 'NAILS', status: true },
    { index: 2, iddichvu: 'LVHAIR', namedichvu: 'NAILS', status: false },
    { index: 3, iddichvu: 'LVNAILS', namedichvu: 'NAILS', status: true },
    { index: 4, iddichvu: 'LVNAILS', namedichvu: 'HAIR', status: false },
    { index: 5, iddichvu: 'LVHAIR', namedichvu: 'HAIR', status: true },
    { index: 6, iddichvu: 'JGD345VE', namedichvu: 'HAIR', status: true },
  ]
  constructor() { }

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
  }

}
