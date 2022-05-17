import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { MenuItem } from 'primeng/api'
import * as queryString from 'query-string';
import { ApiService } from 'src/services/api.service';
import { ExportFileService } from 'src/services/export-file.service';
interface Status {
  name: string
  value:number
}
@Component({
  selector: 'app-dich-vu',
  templateUrl: './dich-vu.component.html',
  styleUrls: ['./dich-vu.component.scss']
})
export class DichVuComponent implements OnInit {
  cities: Status[];
  items1: MenuItem[];
  activeItem: MenuItem;
  datadichvu: any = []
  datadichvuFilter: any = []
  query = {
    getReaml: 1
  }
  
  constructor(
    private apiService: ApiService,
    private fileService: ExportFileService
    ) { }

  ngOnInit(): void {
    
    this.cities = [
      { name: 'Tất cả' ,value :0},
      { name: 'Đang hoạt động ',value:1 },
      { name: 'Dừng hoạt động',value:2 },
    ];
    this.items1 = [
      { label: 'Lĩnh vực', routerLink: '/linhvuc-dichvu' },
      { label: 'Dịch vụ', routerLink: '/dich-vu' },
    ];
    this.getDichVu();
  }
  getDichVu() {
    const params = queryString.stringify(this.query);
    this.apiService.getDichVu(params).subscribe(response => {
      this.datadichvu = response.data.map((t:any) =>{t.realm
        if (t && t.realm ) {
          t.isActive = t.realm.isActive;  
        }
        return t;
      });
      this.datadichvuFilter = this.datadichvu
    })
  }
  handleChange(event:any){
   if(event.value.value===0)
   {
    this.datadichvuFilter  = this.datadichvu
   }else if(event.value.value===1)
   {
    this.datadichvuFilter  = this.datadichvu.filter((t: any) => t.isActive);
    const a = this.datadichvu.filter((t: any) => t.isActive);;
    this.datadichvuFilter=[...a];
   }
   else if(event.value.value===2){
    this.datadichvuFilter  = this.datadichvu.filter((t: any) => t.isActive == false );
    const b=this.datadichvu.filter((t: any) => t.isActive == false );;
    this.datadichvuFilter= [...b];
   }
  }
  exportexcel() {
    let dataExport: any = [];
    this.datadichvu.forEach((account: any) => {
      let data: any = {};
      data['Mã Lĩnh Vực '] = account.code;
      data['Tên Lĩnh Vực'] = account.name;
      data['Trạng thái'] = account.isActive;
      dataExport.push(data);
    })
    this.fileService.exportAsExcelFile(dataExport, 'Danh sách dịch vụ ' + new Date());
  }
}
