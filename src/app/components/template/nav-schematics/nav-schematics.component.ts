import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HeaderService } from '../header/header.service';
import { Router } from '@angular/router';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'escapay-nav-schematics',
  templateUrl: './nav-schematics.component.html',
  styleUrls: ['./nav-schematics.component.css']
})
export class NavSchematicsComponent implements OnInit {
  @Input() showMenuButton: boolean = true;
  @Output() menuButtonClick = new EventEmitter<void>();
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  anoAtual: number = 0;

  toggleMenu() {
    this.menuButtonClick.emit();
  }

  constructor(private headerService: HeaderService,
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private loginService: LoginService) {
    this.headerService.showMenuButton = true;

  }

  iconForLoggedIn: string = 'login';

  ngOnInit() {
    this.loginService.getAuthStatus().subscribe((isAuthenticated) => {
      this.isLoggedIn = isAuthenticated;
    });
    this.isLoggedIn = this.loginService.isAuthenticated();
    this.loginService.isAdmin().subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    });

    this.anoAtual = new Date().getFullYear();
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
