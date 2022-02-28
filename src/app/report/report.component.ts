import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
    thongke=[{donhang:350,khachhang:420,doanhthu:5000000}];
    
  constructor() { }

  ngOnInit(): void {
  }

}
