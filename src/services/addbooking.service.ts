import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddbookingService {

  constructor() { }

  getaddbooking(){
    return of(
      [
        {stt:1, madichvu:' DKGD33544',tendichvu:'Nối mi',linhvuc:'HAIR', gia:'150.000đ',thanhtien:'150.000đ'},
        {stt:2, madichvu:' DKGD33544',tendichvu:'Cắt móng',linhvuc:'HAIR', gia:'50.000đ',thanhtien:'50.000đ'},
        {stt:3, madichvu:' DKGD33544',tendichvu:'Nối mi',linhvuc:'HAIR', gia:'250.000đ',thanhtien:'150.000đ'},
        {stt:4, madichvu:' DKGD33544',tendichvu:'Cắt móng',linhvuc:'HAIR', gia:'150.000đ',thanhtien:'150.000đ'}
      ]
    )
  }
}
