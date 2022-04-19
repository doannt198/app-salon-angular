import { LiteralMapEntry } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';;
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { VoucherService } from 'src/services/voucher.service';

@Component({
  selector: 'app-them-voucher',
  templateUrl: './them-voucher.component.html',
  styleUrls: ['./them-voucher.component.scss'],
  providers: [MessageService]
})
export class ThemVoucherComponent implements OnInit {
  items: MenuItem[];
  file: any = null;
  imageUrl = '';
  activeItem: MenuItem;
  voucher: any = [];
  index = 0;
  infovoucher: any = {
    Id: '',
    Code: '',
    Name: '',
    Content: '',
    SalonId: 0,
    Image: null,
    PercentRatio: '',
    BeginAt: null,
    EndAt: null,
    IsShowInSalon: false,
    IsShowInHome: true,
    VoucherServicesModel: []
  };
  constructor(
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private voucherService: VoucherService
  ) { }

  ngOnInit(): void {
    this.items = [
      { label: 'Thông tin', routerLink: '/them-voucher' },
      { label: 'Gán dữ liệu', routerLink: '/gan-du-lieu-voucher' },
    ];
    this.activeItem = this.items[0];
    this.primengConfig.ripple = true;
  }
  onFileChanged(event: any) {
    this.file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(this.file)
    reader.onload = (e: any) => {
      this.imageUrl = e.target.result
    }
  }
  onSubmit(f: any) {
    var bodyFormData: any = new FormData()
    if (this.file) {
      bodyFormData.append('Image', this.file)
    } else {
      bodyFormData.append('Image', null)
    }
    bodyFormData.append('Code', this.infovoucher.Code)
    bodyFormData.append('Name', this.infovoucher.Name)
    bodyFormData.append('Content', this.infovoucher.Content)
    bodyFormData.append('SalonId', this.infovoucher.SalonId)
    bodyFormData.append('PercentRatio', this.infovoucher.PercentRatio)
    bodyFormData.append('BeginAt', moment(this.infovoucher.BeginAt).format('YYYY/MM/DD HH:mm:SS'))
    bodyFormData.append('EndAt', moment(this.infovoucher.EndAt).format('YYYY/MM/DD HH:mm:SS'))
    bodyFormData.append('EndAt', moment(this.infovoucher.EndAt).format('YYYY/MM/DD HH:mm:SS'))
    bodyFormData.append('IsShowInSalon:', !this.infovoucher.IsShowInHome)
    bodyFormData.append('IsShowInHome:', this.infovoucher.IsShowInHome)
    bodyFormData.append('VoucherServicesModel', [])
    this.voucherService.addVoucher(bodyFormData).subscribe(response => {
      console.log(response)
    })
    this.messageService.add({ severity: 'success', summary: 'Thông báo', detail: 'Thêm Voucher thành công' });
  }
  handleChange(e: any) {
    this.index = e.index;
  }
}
