import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import {MenuItem} from 'primeng/api'
interface Status{
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
  databooking = [
    { id: 'JGD345VE', name: 'Nguyễn Hoàng Yến', checkinday: '29/10/2021', typebooking: true , status: true , hairdresser: 'Đặng Kim Thanh',  },
    { id: 'JGD345VE', name: 'Võ Thanh Mai', checkinday: '29/10/2021',  typebooking: false , status: true , hairdresser: 'Nguyễn Thị Ngọc', },
    { id: 'JGD345VE', name: 'Nguyễn Thị Hoàn', checkinday: '29/10/2021',  typebooking: true , status: false , hairdresser: 'Mona Lisa',  },
    { id: 'JGD345VE', name: 'Võ Yến Nhi', checkinday: '29/10/2021',  typebooking: true , status: true ,hairdresser: 'Đặng Kim Lan',  },
    { id: 'JGD345VE', name: 'Đặng Thị Kim Yến', checkinday: '29/10/2021',  typebooking: false , status: true , hairdresser: 'Lê Lan Anh',  },
    { id: 'JGD345VE', name: 'Nguyễn Phương Trinh', checkinday: '29/10/2021',  typebooking: true , status: false ,hairdresser: 'Fendi', },
  ]
  constructor() { }

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
  }
}
