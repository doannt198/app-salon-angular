import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { MenuItem } from 'primeng/api'
import { BaocaobookingService } from 'src/services/baocaobooking.service';
interface Status {
  name: string
}
@Component({
  selector: 'app-tong-hop-don-booking',
  templateUrl: './tong-hop-don-booking.component.html',
  styleUrls: ['./tong-hop-don-booking.component.scss']
})
export class TongHopDonBookingComponent implements OnInit {
  cities1: Status[];
  cities2: Status[];
  cities3: Status[];
  selectedCity1: Status;
  selectedCity2: Status;
  selectedCity3: Status;
  items: SelectItem[];
  items1: MenuItem[];
  activeItem: MenuItem;
  databooking: any = [];
  constructor(private baocaobooking: BaocaobookingService) { }

  ngOnInit(): void {
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
    this.getbaocaobooking();
  }
  getbaocaobooking() {
    this.baocaobooking.getBaocaobooking().subscribe(reponse => { this.databooking = reponse })
  }
}
