import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/components/login/login.service';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'escapay-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mostrarMenu: boolean = true;
  isAdmin: boolean = false;

  constructor(private headerService: HeaderService,
    private loginService: LoginService) {
    headerService.headerData = {
      title: "Escapay",
      icon: "",
      routeUrl: ""
    }
  }

  ngOnInit() {
    if (window.location.href.includes('tabela')) {
      this.mostrarMenu = false;
    } else {
      this.mostrarMenu = true;
    }
    this.loginService.isAdmin().subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    });
  }
}