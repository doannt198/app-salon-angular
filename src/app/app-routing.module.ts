
import { WorkerDetailComponent } from './worker-management/worker-detail/worker-detail.component';
import { SalonDetailComponent } from './salon-management/salon-detail/salon-detail.component';
import { CustomerDetailComponent } from './customer-management/customer-detail/customer-detail.component';
import { BookingDetailComponent } from './manager-booking/booking-detail/booking-detail.component';
import { ThemThoComponent } from './worker-management/them-tho/them-tho.component';
import { ThemVoucherComponent } from './voucher-management/them-voucher/them-voucher.component';
import { GioiThieuSalonComponent } from './salon-management/gioi-thieu-salon/gioi-thieu-salon.component';
import { GanDuLieuSalonComponent } from './salon-management/gan-du-lieu-salon/gan-du-lieu-salon.component';
import { ThemSalonComponent } from './salon-management/them-salon/them-salon.component';
import { ThemKhachHangComponent } from './customer-management/them-khach-hang/them-khach-hang.component';
import { ThemBookingComponent } from './manager-booking/them-booking/them-booking.component';
import { GanDuLieuComponent } from './khoi-tao-tai-khoan/gan-du-lieu/gan-du-lieu.component';
import { ThemTaiKhoanComponent } from './khoi-tao-tai-khoan/them-tai-khoan/them-tai-khoan.component';
import { AddLinhVucComponent } from './linh-vuc-dich-vu/add-linh-vuc/add-linh-vuc.component';
import { BaoCaoDoanhThuComponent } from './bao-cao-doanh-thu/bao-cao-doanh-thu.component';
import { TongHopDonBookingComponent } from './tong-hop-don-booking/tong-hop-don-booking.component';
import { KhoiTaoTaiKhoanComponent } from './khoi-tao-tai-khoan/khoi-tao-tai-khoan.component';
import { LinhVucDichVuComponent } from './linh-vuc-dich-vu/linh-vuc-dich-vu.component';
import { SalonManagementComponent } from './salon-management/salon-management.component';
import { VoucherManagementComponent } from './voucher-management/voucher-management.component';
import { WorkerManagementComponent } from './worker-management/worker-management.component';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { ManagerBookingComponent } from './manager-booking/manager-booking.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { GanDuLieuVoucherComponent } from './voucher-management/gan-du-lieu-voucher/gan-du-lieu-voucher.component';
import { GanDuLieuThoComponent } from './worker-management/gan-du-lieu-tho/gan-du-lieu-tho.component';
import { GioiThieuThoComponent } from './worker-management/gioi-thieu-tho/gioi-thieu-tho.component';
import { QuanLySalonThoComponent } from './worker-management/quan-ly-salon-tho/quan-ly-salon-tho.component';
import { QuanLySalonComponent } from './salon-management/quan-ly-salon/quan-ly-salon.component';
import { DichVuComponent } from '../app/linh-vuc-dich-vu/dich-vu/dich-vu.component';
import { NotificationManagementComponent } from '../app/notification-management/notification-management.component';
import { ThemThongBaoComponent } from '../app/notification-management/them-thong-bao/them-thong-bao.component'
import { VoucherDetailComponent } from './voucher-management/voucher-detail/voucher-detail.component';
import { ChiTietVoucherComponent } from './voucher-management/chi-tiet-voucher/chi-tiet-voucher.component'
import { QuanTriAppComponent } from './quan-tri-app/quan-tri-app.component';
import { QuanLyDanhGiaComponent } from './quan-ly-danh-gia/quan-ly-danh-gia.component';
import { QuanLyForumComponent } from './quan-ly-forum/quan-ly-forum.component';
import { QuanTriAppChiTietComponent } from './quan-tri-app/quan-tri-app-chi-tiet/quan-tri-app-chi-tiet.component';
import { ChiTietThongBaoComponent } from './notification-management/chi-tiet-thong-bao/chi-tiet-thong-bao.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', redirectTo: '/report', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'report', component: ReportComponent },
  { path: 'managerbooking', component: ManagerBookingComponent },
  { path: 'managementcustomer', component: CustomerManagementComponent },
  { path: 'managementworker', component: WorkerManagementComponent },
  { path: 'notificationmanagement', component: NotificationManagementComponent },
  { path: 'notificationmanagement/chi-tiet-thong-bao/:id', component: ChiTietThongBaoComponent },
  { path: 'managementvoucher', component: VoucherManagementComponent },
  { path: 'managementsalon', component: SalonManagementComponent },
  { path: 'linhvuc-dichvu', component: LinhVucDichVuComponent },
  { path: 'khoitao-taikhoan', component: KhoiTaoTaiKhoanComponent },
  { path: 'tonghop-donbooking', component: TongHopDonBookingComponent },
  { path: 'baocao-doanhthu', component: BaoCaoDoanhThuComponent },
  { path: 'them-dich-vu', component: AddLinhVucComponent },
  { path: 'them-tai-khoan', component: ThemTaiKhoanComponent },
  { path: 'gan-du-lieu', component: GanDuLieuComponent },
  { path: 'them-booking', component: ThemBookingComponent },
  { path: 'them-khach-hang', component: ThemKhachHangComponent },
  { path: 'them-salon', component: ThemSalonComponent },
  { path: 'gan-du-lieu-salon', component: GanDuLieuSalonComponent },
  { path: 'gioi-thieu-salon', component: GioiThieuSalonComponent },
  { path: 'quan-ly-salon', component: QuanLySalonComponent },
  { path: 'them-voucher', component: ThemVoucherComponent },
  { path: 'gan-du-lieu-voucher', component: GanDuLieuVoucherComponent },
  { path: 'them-tho', component: ThemThoComponent },
  { path: 'them-voucher', component: ThemVoucherComponent },
  { path: 'booking-detail', component: BookingDetailComponent },
  { path: 'customer-detail/:id', component: CustomerDetailComponent },
  { path: 'salon-detail/:id', component: SalonDetailComponent },
  { path: 'worker-detail/:id', component: WorkerDetailComponent },
  { path: 'gan-du-lieu-tho', component: GanDuLieuThoComponent },
  { path: 'gioi-thieu-tho', component: GioiThieuThoComponent },
  { path: 'chi-tiet-voucher/:id', component: ChiTietVoucherComponent },
  { path: 'quan-ly-salon-tho', component: QuanLySalonThoComponent },
  { path: 'voucher-detail', component: VoucherDetailComponent },
  { path: 'them-thong-bao', component: ThemThongBaoComponent },
  { path: 'dich-vu', component: DichVuComponent },
  { path: 'quan-tri-app', component: QuanTriAppComponent },
  { path: 'quan-ly-danh-gia', component: QuanLyDanhGiaComponent },
  { path: 'quan-ly-forum', component: QuanLyForumComponent },
  { path: 'quan-tri-app-chi-tiet/:type', component: QuanTriAppChiTietComponent },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
