import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quan-tri-app-chi-tiet',
  templateUrl: './quan-tri-app-chi-tiet.component.html',
  styleUrls: ['./quan-tri-app-chi-tiet.component.scss']
})
export class QuanTriAppChiTietComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  index=0
  handleChange(e: any) {
  this.index=e.index
    console.log(e);
  }
}
