import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SelectItem } from 'primeng/api';
import {MenuItem} from 'primeng/api'
import {LinhvucService} from '../../services/linhvuc.service';
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
  items: SelectItem[];
  items1: MenuItem[];
  activeItem: MenuItem;
  datalinhvuc:any=[]
  constructor( private linhvucservice: LinhvucService) { }

  ngOnInit(): void {
    this.cities = [
      { name: 'Tất cả' },
      { name: 'Đang hoạt động ' },
      { name: 'Dừng hoạt động' },
    ];
    this.items1 = [
      {label: 'Lĩnh vực', routerLink:'/linhvuc-dichvu'},
      {label: 'Dịch vụ' , routerLink:'/dich-vu'},
  ];
    this.getLinhVuc();
  }
  getLinhVuc(){
    this.linhvucservice.getLinhVuc().subscribe(response => {
      
      this.datalinhvuc = response.data;
    })
  }
}
