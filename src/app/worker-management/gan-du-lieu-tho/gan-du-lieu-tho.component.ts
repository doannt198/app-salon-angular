import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MenuItem } from 'primeng/api'
@Component({
  selector: 'app-gan-du-lieu-tho',
  templateUrl: './gan-du-lieu-tho.component.html',
  styleUrls: ['./gan-du-lieu-tho.component.scss']
})
export class GanDuLieuThoComponent implements OnInit, OnChanges {
  @Input() services: any = [];
  treeData = [
    {
      label: "Documents",
      data: "Documents Folder",
      expandedIcon: "pi pi-folder-open",
      collapsedIcon: "pi pi-folder",
      children: [{
        label: "Work",
        data: "Work Folder",
        expandedIcon: "pi pi-folder-open",
        collapsedIcon: "pi pi-folder",
        children: [{ "label": "Expenses.doc", "icon": "pi pi-file", "data": "Expenses Document" }, { "label": "Resume.doc", "icon": "pi pi-file", "data": "Resume Document" }]
      }]
    }
  ];
  value2: string;
  city: string;
  items: MenuItem[];
  activeItem: MenuItem;
  selectedCities: string[] = [];
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.services && this.services.length) {
      this.services.map((t: any) => {
        return t;
      })
    }

    // isDeleted: false
    // price: 500000
    // service: {code: "NAIL01", name: "Manicure check speed", realmId: 1,…}
    // code: "NAIL01"
    // createdAt: "2022-03-16T09:32:44.0854088+07:00"
    // createdBy: null
    // id: 1
    // isActive: true
    // isDeleted: false
    // name: "Manicure check speed"
    // realm: {code: "Nail", name: "Nail", id: 1, isDeleted: false, isActive: true, createdBy: "Đức Trịnh",…}
    // realmId: 1
    // serviceId: 1
    // technicianId: 2
  }

  ngOnInit(): void {
  }
}
