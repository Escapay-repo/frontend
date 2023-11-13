import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'escapay-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mostrarMenu: boolean = true;

  constructor (private headerService: HeaderService) {
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
  }
}