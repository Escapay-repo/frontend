import { Component, OnInit } from '@angular/core';
import { LogicaService } from 'src/app/views/calculos-tpv/logica.service';

@Component({
  selector: 'escapay-share-bandeiras',
  templateUrl: './share-bandeiras.component.html',
  styleUrls: ['./share-bandeiras.component.css']
})
export class ShareBandeirasComponent implements OnInit {
  resultados: number[] = [];

  constructor(private logicaService: LogicaService) {}

  ngOnInit() {
    this.logicaService.resultado$.subscribe(resultados => {
      this.resultados = resultados;
      this.preencherTabelaShareBandeiras();
    });
  }

  preencherTabelaShareBandeiras() {
    const tabelasShareBandeiras = document.querySelectorAll('.tabela-container .tabela');

    // Verifique se os resultados estão disponíveis e se há tabelas suficientes
    if (this.resultados.length === tabelasShareBandeiras.length) {
      tabelasShareBandeiras.forEach((tabela, index) => {
        const tds = tabela.querySelectorAll('tr td');
        tds.forEach((td, tdIndex) => {
          if (tdIndex === 0) {
            // O primeiro TD em cada linha é onde você deseja inserir o resultado
            td.textContent = this.resultados[index].toFixed(2); // Formatando o número
          }
          // Se desejar, calcule e preencha os outros TDs aqui
        });
      });
    }
  }
}