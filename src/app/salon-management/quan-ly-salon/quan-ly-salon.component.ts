import { Component, Input, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { SalonService } from 'src/services/salon.service';
@Component({
  selector: 'app-quan-ly-salon',
  templateUrl: './quan-ly-salon.component.html',
  styleUrls: ['./quan-ly-salon.component.scss']
})
export class QuanLySalonComponent implements OnInit {
  @Input() salon_Technicians:'';
  status:string;
  id: number;
  salons: any;
  detail:any;
  constructor(private salonService: SalonService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.salonService.getSalonbyTech(this.id).subscribe((response: any) => {
      this.salons = response.data;
      console.log(this.salons)
    })
  }
  Getdetail(item: any){
    this.detail = item;
  }
}
