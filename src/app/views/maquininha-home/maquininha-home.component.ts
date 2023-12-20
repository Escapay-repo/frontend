import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'escapay-maquininha-home',
  templateUrl: './maquininha-home.component.html',
  styleUrls: ['../home/home.component.css', './maquininha-home.component.css']
})
export class MaquininhaHomeComponent implements OnInit {
  mostrarMenu: boolean = true;

  constructor() {
  }

  ngOnInit() {
    if (window.location.href.includes('tabela')) {
      this.mostrarMenu = false;
    } else {
      this.mostrarMenu = true;
    }
  }
}