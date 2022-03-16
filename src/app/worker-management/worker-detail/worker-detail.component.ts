import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { WorkerService } from 'src/services/worker.service';
@Component({
  selector: 'app-worker-detail',
  templateUrl: './worker-detail.component.html',
  styleUrls: ['./worker-detail.component.scss']
})
export class WorkerDetailComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  status: true;
  id: number = 0;
  detail: any;
  constructor(private WorkerService: WorkerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.items = [
      { label: 'Thông tin', routerLink: '/worker-detail/' },
      { label: 'Gán dữ liệu', routerLink: '/gan-du-lieu-tho' },
      { label: 'Giới thiệu', routerLink: '/gioi-thieu-tho' },
      { label: 'Quản lý Salon', routerLink: '/quan-ly-salon-tho' },

    ];
    this.activeItem = this.items[0];
    this.id = this.route.snapshot.params.id;
    this.WorkerService.getWorkerdetail(this.id).subscribe((response: any) => {
      this.detail = response.data;
    })
  }

  index = 0;
  handleChange(e: any) {
    this.index = e.index;
  }
}
