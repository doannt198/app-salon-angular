import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { SalonService } from 'src/services/salon.service';
@Component({
  selector: 'app-salon-detail',
  templateUrl: './salon-detail.component.html',
  styleUrls: ['./salon-detail.component.scss']
})
export class SalonDetailComponent implements OnInit {
  status: string;
  id: number;
  detail: any;
  constructor(private salonService: SalonService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.salonService.getSalondetail(this.id).subscribe((response: any) => {
      this.detail = response.data;
    
    })
  }
  index = 0;
  handleChange(e: any) {
    this.index = e.index;
  }
}
