import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { MenuItem } from 'primeng/api'
import { LinhvucService } from '../../services/linhvuc.service';
interface City {
  name: string,
  value: number
}
@Component({
  selector: 'app-linh-vuc-dich-vu',
  templateUrl: './linh-vuc-dich-vu.component.html',
  styleUrls: ['./linh-vuc-dich-vu.component.scss']
})
export class LinhVucDichVuComponent implements OnInit {
  cities: City[];
  items: SelectItem[];
  items1: MenuItem[];
  activeItem: MenuItem;
  datalinhvuc: any = []
  datalinhvucFilter: any = [];
  constructor(private linhvucservice: LinhvucService) { }

  ngOnInit(): void {
    this.cities = [
      { name: 'Tất cả', value: 0 },
      { name: 'Đang hoạt động ', value: 1 },
      { name: 'Dừng hoạt động', value: 2 },
    ];
    this.items1 = [
      { label: 'Lĩnh vực', routerLink: '/linhvuc-dichvu' },
      { label: 'Dịch vụ', routerLink: '/dich-vu' },
    ];
    this.getLinhVuc();
  }
  getLinhVuc() {
    this.linhvucservice.getLinhVuc().subscribe(response => {
      this.datalinhvuc = response.data;
    })
  }
  handleChange(event: any) {
    console.log(event.value.value)
    if (event.value.value === 0) {
      this.datalinhvucFilter = this.datalinhvuc
    } else if (event.value.value === 1) {
      this.datalinhvucFilter = this.datalinhvuc.filter((t: any) => t.isActive == true);
      const a = this.datalinhvuc.filter((t: any) => t.isActive == true);;
      this.datalinhvucFilter = [...a];
    }
    else if (event.value.value === 2) {
      this.datalinhvucFilter = this.datalinhvuc.filter((t: any) => t.isActive == false);
      const b = this.datalinhvuc.filter((t: any) => t.isActive == false);;
      this.datalinhvucFilter = [...b];
    }
  }
}
