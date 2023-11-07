import { Component, OnInit } from '@angular/core';
import { TaxaCustoComponent } from '../taxa-custo/taxa-custo.component';
import { TaxaVendaService } from '../taxa-venda/taxa-venda.service';
import { MarkupService } from './markup.service';
import { tabelaCrud } from 'src/app/components/tabela/tabelaCrud';
import { TaxaCustoService } from '../taxa-custo/taxa-custo.service';

@Component({
  selector: 'escapay-markup',
  templateUrl: './markup.component.html',
  styleUrls: ['./markup.component.css']
})
export class MarkupComponent 
// implements OnInit 
{

}
  // taxasCusto: Array<{ master: number, visa: number, outros: number }> = [];
  // taxasVenda: tabelaCrud | null = null;
  
  // constructor(
  //   private taxaVendaCompartilhada: TaxaVendaService,
  //   private taxaCustoCompartilhada: TaxaCustoService
  //   ) { }


  // ngOnInit(): void {
  //   this.taxaCustoCompartilhada.taxasCusto$.subscribe((taxas) => {
  //     this.taxasCusto = taxas;
  //     this.calcularMarkup();
  //   });

  //   this.taxaVendaCompartilhada.tabelaDados$.subscribe((dados) => {
  //     this.taxasVenda = dados;
  //     this.calcularMarkup();
  //   });
  // }

  
  // calcularMarkup() {
  //   if (this.taxasCusto.length > 0 && this.taxasVenda) {
  //     const resultados = this.taxasCusto.map((taxaCusto) => {
  //       return {
  //         master: this.taxasVenda.debito.masterCard.valor - taxaCusto.master,
  //         visa: this.taxasVenda.debito.visa.valor - taxaCusto.visa,
  //         outros: this.taxasVenda.debito.outros.valor - taxaCusto.outros
  //       };
  //     });

  //     // Use a matriz "resultados" para exibir os valores em sua tabela
  //     console.log('Resultados do Markup:', resultados);
  //   }
  // }
