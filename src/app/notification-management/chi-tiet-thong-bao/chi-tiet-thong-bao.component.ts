import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/services/notification.service';

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
    private notiService: NotificationService
  ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params.id;
    this.getDetail(this.id);
  }
  getDetail(id:number):void{
    this.notiService.getDetailNotification(id).subscribe(response=>
     this.detailNoti=response.data
    )
  }
}
