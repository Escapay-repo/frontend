import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'escapay-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mostrarMenu: boolean = true;

  ngOnInit() {
    if (window.location.href.includes('tabela')) {
      this.mostrarMenu = false;
    } else {
      this.mostrarMenu = true;
    }
  }
}