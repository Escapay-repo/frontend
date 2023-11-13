import { Component, OnInit } from '@angular/core';
import { TaxaCustoService } from './taxa-custo.service';
import { tabelaTaxaCusto } from 'src/app/components/tabela/tabelaTaxaCusto';

@Component({
  selector: 'escapay-taxa-custo',
  templateUrl: './taxa-custo.component.html',
  styleUrls: ['./taxa-custo.component.css']
})
export class TaxaCustoComponent {
  taxaCusto = tabelaTaxaCusto;
}

