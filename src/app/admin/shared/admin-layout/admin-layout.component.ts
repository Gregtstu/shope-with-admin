import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {MatSidenav, MatSidenavContainer, MatSidenavModule} from "@angular/material/sidenav";
import {childRoutes} from "../child-routes";
import {MatButtonModule} from "@angular/material/button";
import { AuthService } from 'src/app/services/auth.service';


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
  constructor(
    public auth: AuthService, 
    private rout: Router
    ) {}

  ngOnInit() {
    console.log(this.auth.isAuthenticated());
    
  }

  toggleSidebar(): void {
    this.sideNavToggled.emit();
  }

  onLoggedout() {
    this.rout.navigate(['/']);
  }

  logout(){
    this.auth.logout();
    this.rout.navigate(['/admin', 'login'])
  }

}
