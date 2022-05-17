import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-chi-tiet-thong-bao',
  templateUrl: './chi-tiet-thong-bao.component.html',
  styleUrls: ['./chi-tiet-thong-bao.component.scss']
})
export class ChiTietThongBaoComponent implements OnInit {
  id: 0;
  detailNoti:any=[];
  detailuser:any=[];
  constructor(
    private router: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params.id;
    this.getDetail(this.id);
  }
  getDetail(id:number){
    this.apiService.getDetailNotification(id).subscribe(res=>
    {
      this.detailNoti=res.data
      this.detailuser=this.detailNoti.users.map((t:any)=>t.fullName)
    }
    )
    
  }
}
