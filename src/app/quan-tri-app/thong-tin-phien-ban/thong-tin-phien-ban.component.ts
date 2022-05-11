import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thong-tin-phien-ban',
  templateUrl: './thong-tin-phien-ban.component.html',
  styleUrls: ['./thong-tin-phien-ban.component.scss']
})
export class ThongTinPhienBanComponent implements OnInit {
  @Input() policy:string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onExit(){
    this.router.navigateByUrl('/quan-tri-app')
  }
}
