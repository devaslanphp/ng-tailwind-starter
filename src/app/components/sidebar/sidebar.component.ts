import { Component, OnInit } from '@angular/core';
import { faBars, faTimes, faHome, faSignIn, faUserPlus, faLock, faLockOpen, faUserCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  collapseShow = "hidden";
  faBars = faBars;
  faTimes = faTimes;
  faHome = faHome;
  faSignIn = faSignIn;
  faUserPlus = faUserPlus;
  faLock = faLock;
  faLockOpen = faLockOpen;
  faUserCheck = faUserCheck;

  constructor() { }

  ngOnInit() {
  }

  toggleCollapseShow(classes: any) {
    this.collapseShow = classes;
  }

}
