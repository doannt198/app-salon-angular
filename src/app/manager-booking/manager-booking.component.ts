import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
interface City {
  name: string
}

@Component({
  selector: 'app-manager-booking',
  templateUrl: './manager-booking.component.html',
  styleUrls: ['./manager-booking.component.scss']
})
export class ManagerBookingComponent implements OnInit {
  cities: City[];
  selectedCity2: City;
  items: SelectItem[];
  databooking = [
    { id: 'JGD345VE', name: 'Nguyễn Hoàng Yến', phone: '034 034 3947', hairdresser: 'Đặng Kim Thanh', salon: 'Nails Room Mit’s House ', service: 'Nối mi. cắt móng, cắt tóc ', field: 'NAILS,HAIR' },
    { id: 'JGD345VE', name: 'Võ Thanh Mai', phone: '034 846 5874', hairdresser: 'Nguyễn Thị Ngọc', salon: 'Nails Room Mit’s House ', service: 'Nối mi. cắt móng, cắt tóc ', field: 'NAILS,HAIR' },
    { id: 'JGD345VE', name: 'Nguyễn Thị Hoàn', phone: '039 948 7647', hairdresser: 'Mona Lisa', salon: 'Nails Room Mit’s House ', service: 'Nối mi. cắt móng, cắt tóc ', field: 'NAILS,HAIR' },
    { id: 'JGD345VE', name: 'Võ Yến Nhi', phone: '034 309 8463', hairdresser: 'Đặng Kim Lan', salon: 'Nails Room Mit’s House ', service: 'Nối mi. cắt móng, cắt tóc ', field: 'NAILS,HAIR' },
    { id: 'JGD345VE', name: 'Đặng Thị Kim Yến', phone: '034 098 8988', hairdresser: 'Lê Lan Anh', salon: 'Nails Room Mit’s House ', service: 'Nối mi. cắt móng, cắt tóc ', field: 'NAILS,HAIR' },
    { id: 'JGD345VE', name: 'Nguyễn Phương Trinh', phone: '034 093 8764', hairdresser: 'Fendi', salon: 'Nails Room Mit’s House ', service: 'Nối mi. cắt móng, cắt tóc ', field: 'NAILS,HAIR' },
  ]
  constructor() {
    this.items = [];
    for (let i = 0; i < 10000; i++) {
      this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
    }
    this.cities = [
      { name: 'Tất cả' },
      { name: 'Chờ duyệt ' },
      { name: 'Check in' },
      { name: 'Đã hủy' },
      { name: 'Hoàn thành' }
    ];
  }

  ngOnInit(): void {
  }

}
