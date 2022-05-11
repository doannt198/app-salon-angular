import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient:HttpClient) { }

  getBookings() {
      return of(
        [
            { id: 'JGD345VE', name: 'Nguyễn Hoàng Yến', phone: '034 034 3947', hairdresser: 'Đặng Kim Thanh', salon: 'Nails Room Mit’s House ', service: 'Nối mi. cắt móng, cắt tóc ', field: 'NAILS,HAIR' },
            { id: 'JGD345VE', name: 'Võ Thanh Mai', phone: '034 846 5874', hairdresser: 'Nguyễn Thị Ngọc', salon: 'Nails Room Mit’s House ', service: 'Nối mi. cắt móng, cắt tóc ', field: 'NAILS,HAIR' },
            { id: 'JGD345VE', name: 'Nguyễn Thị Hoàn', phone: '039 948 7647', hairdresser: 'Mona Lisa', salon: 'Nails Room Mit’s House ', service: 'Nối mi. cắt móng, cắt tóc ', field: 'NAILS,HAIR' },
            { id: 'JGD345VE', name: 'Võ Yến Nhi', phone: '034 309 8463', hairdresser: 'Đặng Kim Lan', salon: 'Nails Room Mit’s House ', service: 'Nối mi. cắt móng, cắt tóc ', field: 'NAILS,HAIR' },
            { id: 'JGD345VE', name: 'Đặng Thị Kim Yến', phone: '034 098 8988', hairdresser: 'Lê Lan Anh', salon: 'Nails Room Mit’s House ', service: 'Nối mi. cắt móng, cắt tóc ', field: 'NAILS,HAIR' },
            { id: 'JGD345VE', name: 'Nguyễn Phương Trinh', phone: '034 093 8764', hairdresser: 'Fendi', salon: 'Nails Room Mit’s House ', service: 'Nối mi. cắt móng, cắt tóc ', field: 'NAILS,HAIR' },
        ]
      );
  }

  getBookingDetail(id: string) {
      return of(
        { id: 'JGD345VE', name: 'Nguyễn Hoàng Yến', phone: '034 034 3947', hairdresser: 'Đặng Kim Thanh', salon: 'Nails Room Mit’s House ', service: 'Nối mi. cắt móng, cắt tóc ', field: 'NAILS,HAIR' }
      )
  }

  getListBookingbyCustomer(id:any, PageIndex:any,  PageSize:any):Observable<any> {
      return this.httpClient.get<any>(`http://103.81.87.134:5002/api/Booking/getListBookingByIdCustomer?CustomerId=${id}&PageIndex=${PageIndex}&PageSize=${PageSize}`)
  }
}