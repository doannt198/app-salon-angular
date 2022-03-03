import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api'
import { WorkerService } from 'src/services/worker.service';
@Component({
  selector: 'app-worker-management',
  templateUrl: './worker-management.component.html',
  styleUrls: ['./worker-management.component.scss']
})
export class WorkerManagementComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  val2: number = 3;
  datasalon:any =[]; 
  constructor( private workerService: WorkerService) { }

  ngOnInit(): void { 
    this.items = [
      {label: 'Tất cả'},
      {label: 'Đang hoạt động'},
      {label: 'Dừng hoạt động'}   
  ];
    this.activeItem = this.items[0];
   this.getWorker();
  }
  getWorker(){
    this.workerService.getWorker().subscribe(response=>{this.datasalon=response})
  }
}
