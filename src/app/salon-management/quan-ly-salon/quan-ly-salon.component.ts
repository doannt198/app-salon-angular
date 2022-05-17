import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/services/api.service';
@Component({
  selector: 'app-quan-ly-salon',
  templateUrl: './quan-ly-salon.component.html',
  styleUrls: ['./quan-ly-salon.component.scss']
})
export class QuanLySalonComponent implements OnInit {
  
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
    ) { }

  @Input() salon_Technicians:'';
  status:string;
  id: number;
  salons: any;
  detail:any;

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.apiService.getSalonbyTech(this.id).subscribe((response: any) => {
      this.salons = response.data;
      console.log(this.salons)
    })
  }

  Getdetail(item: any){
    this.detail = item;
  }
}
