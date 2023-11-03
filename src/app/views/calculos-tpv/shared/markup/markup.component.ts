import { Component, OnInit } from '@angular/core';
import { TaxaCustoComponent } from '../taxa-custo/taxa-custo.component';
import { TaxaVendaService } from '../taxa-venda/taxa-venda.service';
import { MarkupService } from './markup.service';

@Component({
  selector: 'escapay-markup',
  templateUrl: './markup.component.html',
  styleUrls: ['./markup.component.css']
})
export class MarkupComponent implements OnInit {


  ngOnInit(): void {
    // this.calcularMarkup();
  }

}