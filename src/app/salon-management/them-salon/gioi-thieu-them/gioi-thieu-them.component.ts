import { Component, OnInit } from '@angular/core';
import { Stringifiable } from 'query-string';

@Component({
  selector: 'app-gioi-thieu-them',
  templateUrl: './gioi-thieu-them.component.html',
  styleUrls: ['./gioi-thieu-them.component.scss']
})
export class GioiThieuThemComponent implements OnInit {
  text:string;
  constructor() { }

  ngOnInit(): void {
  }

}
