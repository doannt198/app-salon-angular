import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class ApiService {
    constructor(private httpClient: HttpClient) { }
    // options = {
    //     headers: new HttpHeaders({
    //         'Authorization': this.authService.getAuthorizationHeaderValue(),
    //         'Content-Type': 'application/json',
    //     })
    // }
    // getDepartments(): Observable<any> {
    //     return this.http.get<any>(`${this.apiBase}/api/v1/shome/GetDepartmentList`, this.options);
    // }
   /*  getDepartments(): Observable<any> {
        return this.http.get<any>(`${this.apiBase}/api/v1/shome/GetDepartmentList`);
    }
    login(params: any): Observable<any> {
        return this.http.post(environment.apiBase + '/api/v1.0/user/login', params);
    } */

    /* refreshToken(refreshToken: string): Observable<any>{
        return this.http.post(`${environment.apiBase}/api/v1.0/user/refresh-token`, {
            refreshToken
        });
    } */

    // deleteMultiTask(exchangeIds): Observable<any> {
    //     return this.http.delete<any>(`${this.apiBase}/api/v1/shome/DeleteTaskMuilti?exchangeIds=${exchangeIds}`, this.options);
    // }
    // setOpportunityProcessApprove(params): Observable<any> {
    //     return this.http.put<any>(`${this.apisCrmBaseUrl}/api/v1/scrm/SetOpportunityProcessApprove`, params , this.options);
    // }
    // setProjectInfo(data) {
    //     return this.http.post<any>(`${this.apiHomeBaseUrl}/SetProjectInfo`, data, this.options);
    // }

   /* ADD-BOOKING */
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
      /*   APP */
        getAppDeltai(type:string):Observable<any> {
          return this.httpClient.get<any>(`http://103.81.87.134:5002/api/category/getAppManage?TypeApp=${type}`).pipe(
            )
        }
      /*   báo cáo đơn booking */
      getBaocaobooking(){
          return of(
            [
              { id: 'JGD345VE', name: 'Nguyễn Hoàng Yến', checkinday: '29/10/2021', typebooking: true , status: true , hairdresser: 'Đặng Kim Thanh',  },
              { id: 'JGD345VE', name: 'Võ Thanh Mai', checkinday: '29/10/2021',  typebooking: false , status: true , hairdresser: 'Nguyễn Thị Ngọc', },
              { id: 'JGD345VE', name: 'Nguyễn Thị Hoàn', checkinday: '29/10/2021',  typebooking: true , status: false , hairdresser: 'Mona Lisa',  },
              { id: 'JGD345VE', name: 'Võ Yến Nhi', checkinday: '29/10/2021',  typebooking: true , status: true ,hairdresser: 'Đặng Kim Lan',  },
              { id: 'JGD345VE', name: 'Đặng Thị Kim Yến', checkinday: '29/10/2021',  typebooking: false , status: true , hairdresser: 'Lê Lan Anh',  },
              { id: 'JGD345VE', name: 'Nguyễn Phương Trinh', checkinday: '29/10/2021',  typebooking: true , status: false ,hairdresser: 'Fendi', },
            ]
          )
        }
       /*  báo cáo doanh thu */

     /*   booking */

      /*  customer */

     /*   dịch vụ */

    /*    feedback */

      /*  khởi tạo tài khoản */

      /*  lĩnh vực */

       /* notification */

      /*  report */

     /*   salon */

      /*  voucher */
      
     /*   worker */

}