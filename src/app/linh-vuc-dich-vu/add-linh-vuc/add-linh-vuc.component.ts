import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-add-linh-vuc',
  templateUrl: './add-linh-vuc.component.html',
  styleUrls: ['./add-linh-vuc.component.scss'],
  providers: [MessageService]
})
export class AddLinhVucComponent implements OnInit {
  value2: string;
  status: string;
  model: any = {
    tenlinhvuc: '',
    malinhvuc: '',
    trangthai: ''
  };
  constructor(private messageService: MessageService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
  onSubmit(){
    this.messageService.add({severity:'success', summary: 'Thành công', detail: 'Lưu thành công'});
    /* alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model)); */

  }

}
