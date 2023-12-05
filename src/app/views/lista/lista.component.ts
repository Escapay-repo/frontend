import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'escapay-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {


  ngOnInit(): void {

  }

  constructor (private headerService: HeaderService) {
    headerService.headerData = {
      title: "Escapay",
      icon: "",
      routeUrl: ""
    }
   }

}
