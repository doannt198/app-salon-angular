import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-linh-vuc',
  templateUrl: './add-linh-vuc.component.html',
  styleUrls: ['./add-linh-vuc.component.scss']
})
export class AddLinhVucComponent implements OnInit {
  value2: string;
  status: string;
  model: any = {
    tenlinhvuc: '',
    malinhvuc: '',
    trangthai: ''
  };
  constructor() { }

  ngOnInit(): void {
    
  }
  onSubmit(){
    alert("Lưu thành công!")
    /* alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model)); */
  }
}
