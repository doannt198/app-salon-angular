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
import {CheckboxModule} from 'primeng/checkbox';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { SalonManagementComponent } from './salon-management/salon-management.component';
import { WorkerManagementComponent } from './worker-management/worker-management.component';
import { VoucherManagementComponent } from './voucher-management/voucher-management.component';
import {RatingModule} from 'primeng/rating';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReportComponent,
    ManagerBookingComponent,
    CustomerManagementComponent,
    SalonManagementComponent,
    WorkerManagementComponent,
    VoucherManagementComponent
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
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
