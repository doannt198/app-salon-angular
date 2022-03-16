import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { lastIndexOf } from '../helpers/function';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  menus: MenuItem[];
  selectedMenu: MenuItem;
  constructor(private router: Router) { 
    this.menus = [
      { label: 'Báo cáo', routerLink: '/report', visible: false },
      { label: 'Quản lý booking', routerLink: '/managerbooking', visible: false },
      { label: 'Quản lý khách hàng', routerLink: '/managementcustomer', visible: false },
      { label: 'Quản lý Salon ', routerLink: '/managementsalon', visible: false },
      { label: 'Quản lý thợ ', routerLink: '/managementworker', visible: false },
      { label: 'Quản lý Voucher', routerLink: '/managementvoucher', visible: false },
      { label: 'Quản lý thông báo', routerLink: '/notificationmanagement', visible: false },
      { label: 'Quản trị App', routerLink: '/quan-tri-app', visible: false },
      { label: 'Quản lý đánh giá', routerLink: '/quan-ly-danh-gia', visible: false },
      { label: 'Quản lý Forum', routerLink: '/quan-ly-forum', visible: false },


    ];
    this.selectedMenu = this.menus[0];
  }

  ngOnInit(): void {
    this.initMenuTop();
  }
  initMenuTop() {
    const index = this.menus.findIndex((_) => {
        return this.router.url.includes(_.routerLink)
      }
    )
    if (index >= 0) {
      this.menus[index].visible = true;
    }
    const numberOfTab = index >= 5 ? 4 : 5;
    this.menus.forEach((e, i) => {
      if (i < numberOfTab) {
        e.visible = true;
      }
      if (i > 5) {
        e.visible = false
      }
    })
  };
  selectMenu(menu: MenuItem) {
    this.selectedMenu = menu;
    this.router.navigateByUrl(menu.routerLink);
  }
  selectMoreMenu (menu: MenuItem) {
    const index = lastIndexOf(this.menus, 'visible', true);
    if (index !== -1) {
      this.menus[index].visible = false;
    }
    menu.visible = true;
    this.selectedMenu =  menu;
    this.router.navigateByUrl(menu.routerLink)
  }

}
