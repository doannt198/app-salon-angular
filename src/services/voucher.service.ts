import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoucherService {

  constructor() { }

  getVoucher() {
    return of([
      { img: 'img_1.png', idvoucher: 'JGD345VE', namevoucher: 'Nguyễn Hoàng Yến', salon: 'Nails Room mit’s House', contents: 'Giảm 50% cho khách hàng sử dụng từ...', startday: '1/3/2022', endday: '3/3/2022', status: "Home" },
      { img: 'img_2.png', idvoucher: 'JGD345VE', namevoucher: 'Võ Thanh Mai', salon: '40 Hair', contents: 'Giảm 50% cho khách hàng sử dụng từ...', startday: '1/3/2022', endday: '3/3/2022', status: "Home" },
      { img: 'img_3.png', idvoucher: 'JGD345VE', namevoucher: 'Nguyễn Thị Hoàn ', salon: '30 Shione', contents: 'Giảm 50% cho khách hàng sử dụng từ...', startday: '1/3/2022', endday: '3/3/2022', status: "Home" },
      { img: 'img_4.png', idvoucher: 'JGD345VE', namevoucher: 'Võ Yến Nhi', salon: 'Nails Room mit’s House', contents: 'Giảm 50% cho khách hàng sử dụng từ...', startday: '1/3/2022', endday: '3/3/2022', status: "Salon" },
      { img: 'img_5.png', idvoucher: 'JGD345VE', namevoucher: 'Đặng Thị Kim Yến', salon: 'Nails Room mit’s House', contents: 'Giảm 50% cho khách hàng sử dụng từ...', startday: '1/3/2022', endday: '3/3/2022', status: "Salon" },
      { img: 'img_6.png', idvoucher: 'JGD345VE', namevoucher: 'Nguyễn Phương Trình', salon: 'Nails Room mit’s House', contents: 'Giảm 50% cho khách hàng sử dụng từ...', startday: '1/3/2022', endday: '3/3/2022', status: "Salon" },
    ]
    )
  }
}
