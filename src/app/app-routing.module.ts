import { SalonManagementComponent } from './salon-management/salon-management.component';
import { VoucherManagementComponent } from './voucher-management/voucher-management.component';
import { WorkerManagementComponent } from './worker-management/worker-management.component';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { ManagerBookingComponent } from './manager-booking/manager-booking.component';

const routes: Routes = [
  { path: 'report', component: ReportComponent },
  { path: 'managerbooking', component: ManagerBookingComponent },
  { path: 'managementcustomer', component: CustomerManagementComponent },
  { path: 'managementworker', component: WorkerManagementComponent },
  { path: 'managementvoucher', component: VoucherManagementComponent },
  { path: 'managementsalon', component: SalonManagementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
