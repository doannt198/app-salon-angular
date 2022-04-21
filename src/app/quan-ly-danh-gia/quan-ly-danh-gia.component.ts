import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { FeedbackService} from '../../services/feedback.service';
import * as queryString from 'query-string';
import { NgxSpinnerService } from 'ngx-spinner';
interface City {
  name: string
}
@Component({
  selector: 'app-quan-ly-danh-gia',
  templateUrl: './quan-ly-danh-gia.component.html',
  styleUrls: ['./quan-ly-danh-gia.component.scss']
})
export class QuanLyDanhGiaComponent implements OnInit {
  cities: City[];
  selectedCity2: City;
  items: SelectItem[];
  totalRecord = 0;
  index =0;
  query: any = {
    PageIndex: 1,
    PageSize: 5,
  };
  datafeedback: any = [];
  constructor(private FeedbackServices: FeedbackService,
    private spinner: NgxSpinnerService,
    ) {
    this.items = [];
    for (let i = 0; i < 10000; i++) {
      this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
    }
    this.cities = [
      { name: 'Tất cả' },
      { name: '1 sao ' },
      { name: '2 sao' },
      { name: '3 sao' },
      { name: '4 sao' },
      { name: '5 sao' },
    ];
  }
  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    this.getFeedback();
  }
  getFeedback(){
    const params = queryString.stringify(this.query);
    this.FeedbackServices.getFeedback(params)
      .subscribe(response => {  
        this.datafeedback = response.data.map((t: any) => {
          if (t && t.booking ) {
            t.salonRate = t.booking.salonRate;
            t.technicianRate = t.booking.technicianRate;
          }
          return t;
        });
        if (this.datafeedback && this.datafeedback.length) {
          this.totalRecord = this.datafeedback[0].totalRecord;
        }
      })
  }
  paginate(event: any): void {
    this.query.PageIndex = event.page + 1;
    this.query.PageSize = event.rows;
    this.getFeedback();
  }

}
