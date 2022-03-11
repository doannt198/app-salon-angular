import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { VoucherService } from 'src/services/voucher.service';
@Component({
  selector: 'app-chi-tiet-voucher',
  templateUrl: './chi-tiet-voucher.component.html',
  styleUrls: ['./chi-tiet-voucher.component.scss']
})
export class ChiTietVoucherComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  id: number;
  detail: any;
  constructor(private VoucherService: VoucherService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.items = [
      { label: 'Thông tin' },
      { label: 'Gán dữ liệu' },
    ];
    this.id = this.route.snapshot.params.id;
    this.VoucherService.getVoucherdetail(this.id).subscribe((response: any) => {
      console.log(response.data)
      this.detail = response.data;
    })
  }
}
