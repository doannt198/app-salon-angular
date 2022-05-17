import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/services/api.service';
@Component({
  selector: 'app-salon-detail',
  templateUrl: './salon-detail.component.html',
  styleUrls: ['./salon-detail.component.scss']
})
export class SalonDetailComponent implements OnInit {
  status: string;
  id: number;
  detail: any;
  constructor(
   private apiService: ApiService,
   private route: ActivatedRoute
   ) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.apiService.getSalondetail(this.id).subscribe((response: any) => {
      this.detail = response.data;
    })
  }
  index = 0;
  handleChange(e: any) {
    this.index = e.index;
  }
}
