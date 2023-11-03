import { Component, OnInit } from '@angular/core';
import { LogicaService } from './logica.service';

@Component({
  selector: 'escapay-calculos-tpv',
  templateUrl: './calculos-tpv.component.html',
  styleUrls: ['./calculos-tpv.component.css']
})
export class CalculosTpvComponent implements OnInit{
  resultados: Array<number> = [];
  inputValue: number = 1000;

  constructor(private calculosTpvService: LogicaService) {}
  ngOnInit(): void {
    this.calcular()
    this.printarNoLog()
  }

  calcular() {
    // this.inputValue = parseFloat((<HTMLInputElement>document.getElementById('inputValue')).value);

    if (!isNaN(this.inputValue)) {
      const tableRows = document.querySelectorAll('.tabela tr');

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
      // this.calculosTpvService.setResultado(this.resultados);
    }
  }

  printarNoLog() {
    console.log("this.resultados", this.resultados);
  }
}

