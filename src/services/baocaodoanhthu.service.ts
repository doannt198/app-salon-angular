import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaocaodoanhthuService {

  constructor() { }

  getBaocaodoanhthu(){
    return of(
      [
        { id: 'JGD345VE', name: 'Nguyễn Hoàng Yến', checkinday: '29/10/2021', typebooking: true , price:"120.000", hairdresser: 'Đặng Kim Thanh',  },
        { id: 'JGD345VE', name: 'Võ Thanh Mai', checkinday: '29/10/2021',  typebooking: false , price:"120.000", hairdresser: 'Nguyễn Thị Ngọc', },
        { id: 'JGD345VE', name: 'Nguyễn Thị Hoàn', checkinday: '29/10/2021',  typebooking: true , price:"120.000" , hairdresser: 'Mona Lisa',  },
        { id: 'JGD345VE', name: 'Võ Yến Nhi', checkinday: '29/10/2021',  typebooking: true , price:"120.000",hairdresser: 'Đặng Kim Lan',  },
        { id: 'JGD345VE', name: 'Đặng Thị Kim Yến', checkinday: '29/10/2021',  typebooking: false , price:"120.000", hairdresser: 'Lê Lan Anh',  },
        { id: 'JGD345VE', name: 'Nguyễn Phương Trinh', checkinday: '29/10/2021',  typebooking: true , price:"120.000" ,hairdresser: 'Fendi', },
      ]
    )
  }
}
