import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/services/api.service';
@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  id: number = 0;
  detail: any;
  data: any;
  query: any={
    CustomerId:1,
    PageIndex: 1,
    PageSize: 10
  }
  constructor(private apiService: ApiService, 
    private route: ActivatedRoute, 
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
    this.id = this.route.snapshot.params.id;
    this.apiService.getCustomerdetail(this.id).subscribe((response: any) => {
      this.detail = response.data;
    })
    this.apiService.getListBookingbyCustomer(this.id, 1, 10).subscribe((response: any) => {

      this.data = response.data
       
      console.log("data",this.data)
    })
  }
 
} 
