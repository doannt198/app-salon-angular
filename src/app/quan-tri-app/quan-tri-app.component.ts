import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-quan-tri-app',
  templateUrl: './quan-tri-app.component.html',
  styleUrls: ['./quan-tri-app.component.scss']
})
export class QuanTriAppComponent implements OnInit {

  constructor(
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }
  
}
