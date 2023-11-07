import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { LogicaService } from './logica.service';
import { MarkupComponent } from './shared/markup/markup.component';
import { MarkupService } from './shared/markup/markup.service';
import { TaxaVendaService } from './shared/taxa-venda/taxa-venda.service';
import { TaxaCustoService } from './shared/taxa-custo/taxa-custo.service';
import { ShareBandeirasComponent } from './shared/share-bandeiras/share-bandeiras.component';

@Component({
  selector: 'escapay-calculos-tpv',
  templateUrl: './calculos-tpv.component.html',
  styleUrls: ['./calculos-tpv.component.css']
})
export class CalculosTpvComponent implements OnInit {
  @Output() resultadosAtualizados = new EventEmitter<number[]>();  
  resultados: Array<number> = [];
  inputValue: number = 1000;
  

  constructor(
    private markupService: MarkupService,
    private taxaCustoService: TaxaCustoService,
    private taxaVendaService: TaxaVendaService
    ) { }

  ngOnInit(): void {
    this.calcular()
    this.printarNoLog()
  }

  calcular() {

    if (!isNaN(this.inputValue)) {
      this.resultados = [];
      const tableRows = document.querySelectorAll('.share-tpv tr');

      for (let i = 1; i < tableRows.length; i++) {
        const shareTD = tableRows[i].querySelectorAll('td')[0];
        const resultadoTD = tableRows[i].querySelectorAll('td')[1];

        if (shareTD && resultadoTD) {
          const shareText = shareTD.textContent;
          if (shareText) {
            const shareValue = parseFloat(shareText.replace('%', '').replace(',', '.'));
            if (!isNaN(shareValue)) {
              const resultado = (this.inputValue * shareValue) / 100;
              resultadoTD.textContent = resultado.toFixed(2);
              this.resultados.push(resultado);
            }
          }
        }
      }
      this.resultadosAtualizados.emit(this.resultados);
    }
  }


  printarNoLog() {
    console.log("this.resultados", this.resultados);
    console.log("this.calcularmarkup", this.markupService);
    console.log("taxa venda", this.taxaVendaService);
    console.log("taxa custo", this.taxaCustoService)

  }
}

