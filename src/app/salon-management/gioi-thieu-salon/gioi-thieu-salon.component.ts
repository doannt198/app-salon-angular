import { Component,Input, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api'
@Component({
  selector: 'app-gioi-thieu-salon',
  templateUrl: './gioi-thieu-salon.component.html',
  styleUrls: ['./gioi-thieu-salon.component.scss']
})
export class GioiThieuSalonComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  @Input() description="";
  status:string;
  constructor() { }
  ngOnInit(): void {
  }
}
