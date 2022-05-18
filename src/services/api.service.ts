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

  /* Api-BOOKING */
  lstBookingFilter(queryString: string): Observable<any> {
    return this.httpClient.get<any>(`http://103.81.87.134:5002/api/Booking/lstBookingFilter?${queryString}`)
  }

  getListBookingbyCustomer(id: any, PageIndex: any, PageSize: any): Observable<any> {
    return this.httpClient.get<any>(`http://103.81.87.134:5002/api/Booking/getListBookingByIdCustomer?CustomerId=${id}&PageIndex=${PageIndex}&PageSize=${PageSize}`)
  }
  /* Api- APP */
  getAppDeltai(type: string): Observable<any> {
    return this.httpClient.get<any>(`http://103.81.87.134:5002/api/category/getAppManage?TypeApp=${type}`).pipe(
    )
  }
  /*   báo cáo đơn booking */
  getBaocaobooking() {
    return of(
      [
        { id: 'JGD345VE', name: 'Nguyễn Hoàng Yến', checkinday: '29/10/2021', typebooking: true, status: true, hairdresser: 'Đặng Kim Thanh', },
        { id: 'JGD345VE', name: 'Võ Thanh Mai', checkinday: '29/10/2021', typebooking: false, status: true, hairdresser: 'Nguyễn Thị Ngọc', },
        { id: 'JGD345VE', name: 'Nguyễn Thị Hoàn', checkinday: '29/10/2021', typebooking: true, status: false, hairdresser: 'Mona Lisa', },
        { id: 'JGD345VE', name: 'Võ Yến Nhi', checkinday: '29/10/2021', typebooking: true, status: true, hairdresser: 'Đặng Kim Lan', },
        { id: 'JGD345VE', name: 'Đặng Thị Kim Yến', checkinday: '29/10/2021', typebooking: false, status: true, hairdresser: 'Lê Lan Anh', },
        { id: 'JGD345VE', name: 'Nguyễn Phương Trinh', checkinday: '29/10/2021', typebooking: true, status: false, hairdresser: 'Fendi', },
      ]
    )
  }
  /*  báo cáo doanh thu */




  /*  customer */
  getCustomer(queryString: string): Observable<any> {
    return this.httpClient.get<any>(`http://103.81.87.134:5002/api/Customer/getCustomer?${queryString}`)
  }
  getCustomerdetail(id: number): Observable<any> {

    return this.httpClient.get<any>('http://103.81.87.134:5002/api/Customer/getCustomerbyId?Id=' + id)
  }
  /*   dịch vụ */
  getDichVu(queryString: any): Observable<any> {
    return this.httpClient.get<any>(`http://103.81.87.134:5002/api/category/getService?${queryString}`)
  }
  /*    feedback */
  getFeedback(queryString: any): Observable<any> {
    return this.httpClient.get<any>(`http://103.81.87.134:5002/api/Salon/getFeedbackBySalon?${queryString}`)
  }
  /*  khởi tạo tài khoản */
  getKhoitaotaikhoan() {
    return of([
      { email: "Hoagyen0387@gmailcomm", hoten: 'Nguyễn Hoàng Yến', phone: '034 034 3947', vaitro: 'HCNS', timedangky: '30/9/2021 08:00', status: true },
      { email: "Hoagyen0387@gmailcomm", hoten: 'Võ Thanh Mai', phone: '034 846 5874', vaitro: 'KETOAN', timedangky: '30/9/2021 08:00', status: false },
      { email: "Hoagyen0387@gmailcomm", hoten: 'Nguyễn Thị Hoàn', phone: '039 948 7647', vaitro: 'User 3', timedangky: '30/9/2021 08:00', status: true },
      { email: "Hoagyen0387@gmailcomm", hoten: 'Võ Yến Nhi', phone: '034 309 8463', vaitro: 'User1:', timedangky: '5/9/2021 08:00', status: false },
      { email: "Hoagyen0387@gmailcomm", hoten: 'Đặng Thị Kim Yến', phone: '034 098 8988', vaitro: 'User 1', timedangky: '30/9/2021 08:00', status: false },
      { email: "Hoagyen0387@gmailcomm", hoten: 'Nguyễn Phương Trinh', phone: '034 093 8764', vaitro: 'User 1', timedangky: '30/9/2021 08:00', status: true },
    ])
  }
  /*  lĩnh vực */
  getLinhVuc(): Observable<any> {
    return this.httpClient.get<any>('http://103.81.87.134:5002/api/category/getReaml').pipe(
    )
  }
  /* notification */
  getNotification(queryString: string): Observable<any> {
    return this.httpClient.get<any>(`http://103.81.87.134:5002/api/report/getNotiall?${queryString}`)
  }

  getDetailNotification(id: number): Observable<any> {
    return this.httpClient.get<any>(`http://103.81.87.134:5002/api/report/getNotibyId?Id=${id}`)
  }

  /*  report */
  getReport(queryString: any): Observable<any> {
    return this.httpClient.get<any>(`http://103.81.87.134:5002/api/report/getReport?${queryString}`)
  }

  /*   salon */
  getSalon(queryString: string): Observable<any> {
    return this.httpClient.get(`http://103.81.87.134:5002/api/Salon/LstSalonWithLocal?${queryString}`);
  }

  getSalondetail(id: number): Observable<any> {
    return this.httpClient.get<any>('http://103.81.87.134:5002/api/Salon/getSalonById?Id=' + id).pipe()
  }

  getSalonbyTech(id: number): Observable<any> {
    return this.httpClient.get<any>('http://103.81.87.134:5002/api/Salon/getSalonbytech?IdTech=' + id).pipe()
  }
  /*  voucher */
  getVoucher(queryString: any): Observable<any> {
    return this.httpClient.get<any>(`http://103.81.87.134:5002/api/Voucher/getVoucher?${queryString}`)
  }

  getVoucherdetail(id: number): Observable<any> {
    return this.httpClient.get<any>('http://103.81.87.134:5002/api/Voucher/getVoucherbyId?Id=' + id)
  }

  addVoucher(newVoucher: any): Observable<any> {
    return this.httpClient.post<any>('http://103.81.87.134:5002/api/Voucher/addVoucher', newVoucher)
  }

  deleteVoucher(id: any): Observable<any> {
    return this.httpClient.put<any>(`http://103.81.87.134:5002/api/Voucher/actionVoucher?actionVoucher=Delete&Id=${id}`, {})
  }
  /*   worker */
  getWorker(queryString: any): Observable<any> {
    return this.httpClient.get<any>(`http://103.81.87.134:5002/api/Technician/LstTechnicianWithLocal?${queryString}`).pipe(
    )
  }

  getWorkerdetail(id: number): Observable<any> {
    return this.httpClient.get<any>('http://103.81.87.134:5002/api/Technician/getTechnicianById?Id=' + id)
  }

  /* Lấy ra tên tỉnh/thành phố, quận/ huyện, xã/phường  */
  getAllCity(): Observable<any> {
    return this.httpClient.get<any>('https://login.cooftech.net/api/addr/getAllCity')
  }

  getDistrict(id: number): Observable<any> {
    return this.httpClient.get<any>(`https://login.cooftech.net/api/addr/getDistrict?Id=${id}`)
  }

  getWard(id: number): Observable<any> {
    return this.httpClient.get<any>(`https://login.cooftech.net/api/addr/getWard?Id=${id}`)
  }

}  