import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {MatSidenav, MatSidenavContainer, MatSidenavModule} from "@angular/material/sidenav";
import {childRoutes} from "../child-routes";
import {MatButtonModule} from "@angular/material/button";


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
  // standalone: true,
  // imports: [MatSidenavModule, MatButtonModule],
})
export class AdminLayoutComponent {
  @Output() sideNavToggled = new EventEmitter<void>();
  @ViewChild(MatSidenavContainer) sidenavContainer!: MatSidenavContainer;
  @ViewChild('snav') sideNav!: MatSidenav;
  showFiller = false;
  sideNavDefaultOpened = true;
  showFullMenu = true;
  isExpanded = true;
  closedWidth = 90;
  openedWidth = 250;
  isMobile!: boolean;
  sideNavMode: 'side' | 'over' = 'side';
  hasBackdrop: boolean = false;
  toolBarHeight = 64;
  routes = childRoutes;
  constructor(private readonly router: Router) {}

  ngOnInit() {}

  toggleSidebar(): void {
    this.sideNavToggled.emit();
  }

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
    this.router.navigate(['/']);
  }

}
