import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api'
import { WorkerService } from 'src/services/worker.service';
import * as queryString from 'query-string';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-worker-management',
  templateUrl: './worker-management.component.html',
  styleUrls: ['./worker-management.component.scss']
})
export class WorkerManagementComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  val2= 4;
  dataworker: any = [];
  totalRecord=0;
  query:any= {
    PageIndex: 1,
    PageSize: 10,
    Search:'',
    isActive:true
  };
  constructor(private workerService: WorkerService,
    private spinner: NgxSpinnerService,
    ) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    this.items = [
      { label: 'Tất cả' },
      { label: 'Đang hoạt động' },
      { label: 'Dừng hoạt động' }
    ];
    this.activeItem = this.items[0];
    this.getWorker();
  }
  getWorker() {
    const params = queryString.stringify(this.query);
    this.workerService.getWorker(params)
      .subscribe(response => {
        this.dataworker = response.data
        if (this.dataworker && this.dataworker.length) {
          this.totalRecord = this.dataworker[0].totalRecord;
        }
      })
  }
  paginate(event: any): void {
    this.query.PageIndex = event.first + 1;
    this.query.PageSize = event.rows;
    this.getWorker();
  }
  handleChange(e: any) {
    // var index = e.index;
    console.log(e);
    if (e.index === 1) {
      this.query.isActive = true;
    } else if (e.index === 2) {
      this.query.isActive = false;
    } else {
      this.query.isActive ;
    }
    this.getWorker();
  }
}
