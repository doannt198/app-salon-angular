import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { HeaderComponent } from './header/header.component';
import { ReportComponent } from './report/report.component';
import { ChartModule } from 'primeng/chart';
import { ManagerBookingComponent } from './manager-booking/manager-booking.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { SalonManagementComponent } from './salon-management/salon-management.component';
import { WorkerManagementComponent } from './worker-management/worker-management.component';
import { VoucherManagementComponent } from './voucher-management/voucher-management.component';
import { RatingModule } from 'primeng/rating';
import { LinhVucDichVuComponent } from './linh-vuc-dich-vu/linh-vuc-dich-vu.component';
import { KhoiTaoTaiKhoanComponent } from './khoi-tao-tai-khoan/khoi-tao-tai-khoan.component';
import { TongHopDonBookingComponent } from './tong-hop-don-booking/tong-hop-don-booking.component';
import { BaoCaoDoanhThuComponent } from './bao-cao-doanh-thu/bao-cao-doanh-thu.component';
import { AddLinhVucComponent } from './linh-vuc-dich-vu/add-linh-vuc/add-linh-vuc.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ThemTaiKhoanComponent } from './khoi-tao-tai-khoan/them-tai-khoan/them-tai-khoan.component';
import { GanDuLieuComponent } from './khoi-tao-tai-khoan/gan-du-lieu/gan-du-lieu.component';
import { ThemBookingComponent } from './manager-booking/them-booking/them-booking.component';
import { ThemKhachHangComponent } from './customer-management/them-khach-hang/them-khach-hang.component';
import { ThemSalonComponent } from './salon-management/them-salon/them-salon.component';
import { GanDuLieuSalonComponent } from './salon-management/gan-du-lieu-salon/gan-du-lieu-salon.component';
import { GioiThieuSalonComponent } from './salon-management/gioi-thieu-salon/gioi-thieu-salon.component';
import { QuanLyThoComponent } from './salon-management/quan-ly-tho/quan-ly-tho.component';
import { ThemThoComponent } from './worker-management/them-tho/them-tho.component';
import { GanDuLieuThoComponent } from './worker-management/gan-du-lieu-tho/gan-du-lieu-tho.component';
import { GioiThieuThoComponent } from './worker-management/gioi-thieu-tho/gioi-thieu-tho.component';
import { QuanLySalonThoComponent } from './worker-management/quan-ly-salon-tho/quan-ly-salon-tho.component';
import { ThemVoucherComponent } from './voucher-management/them-voucher/them-voucher.component';
import { GanDuLieuVoucherComponent } from './voucher-management/gan-du-lieu-voucher/gan-du-lieu-voucher.component';
import { BookingDetailComponent } from './manager-booking/booking-detail/booking-detail.component';
import { CustomerDetailComponent } from './customer-management/customer-detail/customer-detail.component';
import { SalonDetailComponent } from './salon-management/salon-detail/salon-detail.component';
import { WorkerDetailComponent } from './worker-management/worker-detail/worker-detail.component';
import { VoucherDetailComponent } from './voucher-management/voucher-detail/voucher-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GanDuLieuVoucherDetailComponent } from './voucher-management/gan-du-lieu-voucher-detail/gan-du-lieu-voucher-detail.component';
import { QuanLySalonComponent } from './salon-management/quan-ly-salon/quan-ly-salon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ToastModule} from 'primeng/toast';
import {TabViewModule} from 'primeng/tabview';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import {PaginatorModule} from 'primeng/paginator';
import { DichVuComponent } from './linh-vuc-dich-vu/dich-vu/dich-vu.component';
import { NotificationManagementComponent } from './notification-management/notification-management.component';
import { ThemThongBaoComponent } from './notification-management/them-thong-bao/them-thong-bao.component';
import { ChiTietVoucherComponent } from './voucher-management/chi-tiet-voucher/chi-tiet-voucher.component';
import { QuanTriAppComponent } from './quan-tri-app/quan-tri-app.component';
import { QuanLyDanhGiaComponent } from './quan-ly-danh-gia/quan-ly-danh-gia.component';
import { QuanLyForumComponent } from './quan-ly-forum/quan-ly-forum.component';
import {TreeModule} from 'primeng/tree';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReportComponent,
    ManagerBookingComponent,
    CustomerManagementComponent,
    SalonManagementComponent,
    WorkerManagementComponent,
    VoucherManagementComponent,
    LinhVucDichVuComponent,
    KhoiTaoTaiKhoanComponent,
    TongHopDonBookingComponent,
    BaoCaoDoanhThuComponent,
    AddLinhVucComponent,
    ThemTaiKhoanComponent,
    GanDuLieuComponent,
    ThemBookingComponent,
    ThemKhachHangComponent,
    ThemSalonComponent,
    GanDuLieuSalonComponent,
    GioiThieuSalonComponent,
    QuanLyThoComponent,
    ThemThoComponent,
    GanDuLieuThoComponent,
    GioiThieuThoComponent,
    QuanLySalonThoComponent,
    ThemVoucherComponent,
    GanDuLieuVoucherComponent,
    BookingDetailComponent,
    CustomerDetailComponent,
    SalonDetailComponent,
    WorkerDetailComponent,
    VoucherDetailComponent,
    PageNotFoundComponent,
    GanDuLieuVoucherDetailComponent,
    QuanLySalonComponent,
    DichVuComponent,
    NotificationManagementComponent,
    ThemThongBaoComponent,
    ChiTietVoucherComponent,
    QuanTriAppComponent,
    QuanLyDanhGiaComponent,
    QuanLyForumComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TabMenuModule,
    TieredMenuModule,
    ChartModule,
    DropdownModule,
    FormsModule,
    CalendarModule,
    InputTextModule,
    BrowserAnimationsModule,
    TableModule,
    CheckboxModule,
    RatingModule,
    RadioButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ToastModule,
    HttpClientModule,
    HttpClientModule,
    PaginatorModule,
    TabViewModule,
    CommonModule,
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
