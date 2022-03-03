import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { SalonService } from 'src/services/salon.service';
@Component({
  selector: 'app-salon-management',
  templateUrl: './salon-management.component.html',
  styleUrls: ['./salon-management.component.scss']
})
export class SalonManagementComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  val2: number = 3;
  datasalon:any = []; 
  constructor(private salonservice:SalonService) { }

  ngOnInit(): void {
    this.items = [
      {label: 'Tất cả'},
      {label: 'Đang hoạt động'},
      {label: 'Dừng hoạt động'}   
  ];
    this.activeItem = this.items[0];
    this.getSalon();
  }
getSalon(){
 this.salonservice.getSalon().subscribe(response=>this.datasalon=response)
}
}
