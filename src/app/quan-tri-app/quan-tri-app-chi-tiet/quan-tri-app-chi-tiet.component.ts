import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppService} from '../../../services/app.service'
@Component({
  selector: 'app-quan-tri-app-chi-tiet',
  templateUrl: './quan-tri-app-chi-tiet.component.html',
  styleUrls: ['./quan-tri-app-chi-tiet.component.scss']
})
export class QuanTriAppChiTietComponent implements OnInit {
  type:string="";
  detail:any;
  constructor(
    private spinner: NgxSpinnerService,
    private appService: AppService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    this.type=this.router.snapshot.params.type
    this.getDetail(this.type)
  }

  getDetail(type:string){
    this.appService.getAppDeltai(type).subscribe(reponse=>
      this.detail=reponse.data
    )
  }
  index=0
  handleChange(e: any) {
  this.index=e.index
    console.log(e);
  }
}
