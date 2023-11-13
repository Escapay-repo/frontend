import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabelaService } from 'src/app/components/tabela/tabela-create/tabela.service';
import { tabelaCrud } from 'src/app/components/tabela/tabelaCrud';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'escapay-calculos-tpv',
  templateUrl: './calculos-tpv.component.html',
  styleUrls: ['./calculos-tpv.component.css']
})
export class CalculosTpvComponent implements OnInit {
  @Output() resultadosAtualizados = new EventEmitter<number[]>();
  resultados: Array<number> = [];
  inputValue: number = 1000000;
  tables!: tabelaCrud[];
  currentTable!: tabelaCrud;  

  constructor(private headerService: HeaderService,
    private tabelaService: TabelaService,
    private route: ActivatedRoute) {
      headerService.headerData = {
        title: "Tabelas",
        icon: "format_list_bulleted",
        routeUrl: ""
      }
  }

  ngOnInit(): void {
    this.calcular();

    this.tabelaService.read().subscribe(tables => {
      this.tables = tables
      console.log('tables',this.tables)
    })

    this.route.params.subscribe(params => {
      const id = params['id'];
      this.tabelaService.getTableById(id).subscribe(table => {
        this.currentTable = table;
      });
    });
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
              const formattedResultado = resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
              resultadoTD.textContent = formattedResultado;
              this.resultados.push(resultado);

            }
          }
        }
      }
      this.resultadosAtualizados.emit(this.resultados);
    }
  }

  convertToNumber(value: any): number {
    return !isNaN(value) ? Number(value) : 0;
  }
}

