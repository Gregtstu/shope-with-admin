import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {MatSidenav, MatSidenavContainer} from "@angular/material/sidenav";
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent {
  @Output() sideNavToggled = new EventEmitter<void>();
  @ViewChild(MatSidenavContainer) sidenavContainer!: MatSidenavContainer;
  @ViewChild('snav') sideNav!: MatSidenav;

  public   localesList = [
    { code: 'en-US', label: 'English' },
    { code: 'ru', label: 'Русский' }
  ];
  constructor(
    public auth: AuthService,
    private rout: Router
    ) {}

  ngOnInit() {

  }
  logout(){
    this.auth.logout();
    this.rout.navigate(['/admin', 'login'])
  }

}
