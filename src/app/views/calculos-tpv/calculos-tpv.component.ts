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
  currentTableId!: string;
  tables!: tabelaCrud[];
  currentTable!: tabelaCrud;
  formattedValue: string = '1.000.000';

  porcentagemDebito: number = 0;
  porcentagemCredito: number = 0;
  porcentagem2x: number = 0;
  porcentagem3x: number = 0;
  porcentagem4x: number = 0;
  porcentagem5x: number = 0;
  porcentagem6x: number = 0;
  porcentagem7x: number = 0;
  porcentagem8x: number = 0;
  porcentagem9x: number = 0;
  porcentagem10x: number = 0;
  porcentagem11x: number = 0;
  porcentagem12x: number = 0;
  porcentagem13x: number = 0;
  porcentagem14x: number = 0;
  porcentagem15x: number = 0;
  porcentagem16x: number = 0;
  porcentagem17x: number = 0;
  porcentagem18x: number = 0;
  porcentagem19x: number = 0;
  porcentagem20x: number = 0;
  porcentagem21x: number = 0;

  shareDebito: number = 0;
  shareCredito: number = 0;
  share2x: number = 0;
  share3x: number = 0;
  share4x: number = 0;
  share5x: number = 0;
  share6x: number = 0;
  share7x: number = 0;
  share8x: number = 0;
  share9x: number = 0;
  share10x: number = 0;
  share11x: number = 0;
  share12x: number = 0;
  share13x: number = 0;
  share14x: number = 0;
  share15x: number = 0;
  share16x: number = 0;
  share17x: number = 0;
  share18x: number = 0;
  share19x: number = 0;
  share20x: number = 0;
  share21x: number = 0;


  constructor(private headerService: HeaderService,
    private tabelaService: TabelaService,
    private route: ActivatedRoute,
  ) {
    headerService.headerData = {
      title: "Tabelas",
      icon: "format_list_bulleted",
      routeUrl: ""
    }
  }

  ngOnInit(): void {
    this.calcular();
    this.formatInput();
    this.route.params.subscribe(params => {
      this.currentTableId = params['id'];
      this.tabelaService.readById(this.currentTableId).subscribe(table => {
        this.currentTable = table;
      });
    });
  }

  formatInput() {
    const valorSemPontos = this.formattedValue.replace(/\./g, '');
    const partes = valorSemPontos.split(',');
    const valorFinal = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.') + (partes[1] ? ',' + partes[1].substring(0, 3) : '');
    this.formattedValue = valorFinal;
    this.inputValue = parseFloat(valorSemPontos.replace(',', '.'));
  }

  validarPorcentagem() {
    const porcentagemTotal =
      this.porcentagemDebito +
      this.porcentagemCredito +
      this.porcentagem2x +
      this.porcentagem3x +
      this.porcentagem4x +
      this.porcentagem5x +
      this.porcentagem6x +
      this.porcentagem7x +
      this.porcentagem8x +
      this.porcentagem9x +
      this.porcentagem10x +
      this.porcentagem11x +
      this.porcentagem12x +
      this.porcentagem13x +
      this.porcentagem14x +
      this.porcentagem15x +
      this.porcentagem16x +
      this.porcentagem17x +
      this.porcentagem18x +
      this.porcentagem19x +
      this.porcentagem20x +
      this.porcentagem21x

    if (porcentagemTotal > 100) {
      console.error('A soma das porcentagens não pode ser superior a 100%');
    }
  }

  calcular() {
    if (!isNaN(this.inputValue)) {
      this.resultados = [];

      const porcentagens = [
        this.porcentagemDebito,
        this.porcentagemCredito,
        this.porcentagem2x,
        this.porcentagem3x,
        this.porcentagem4x,
        this.porcentagem5x,
        this.porcentagem6x,
        this.porcentagem7x,
        this.porcentagem8x,
        this.porcentagem9x,
        this.porcentagem10x,
        this.porcentagem11x,
        this.porcentagem12x,
        this.porcentagem13x,
        this.porcentagem14x,
        this.porcentagem15x,
        this.porcentagem16x,
        this.porcentagem17x,
        this.porcentagem18x,
        this.porcentagem19x,
        this.porcentagem20x,
        this.porcentagem21x
      ];

      const tableRows = document.querySelectorAll('.share-tpv tr');

      for (let i = 1; i < tableRows.length; i++) {
        const shareTD = tableRows[i].querySelectorAll('td')[1];
        const resultadoTD = tableRows[i].querySelectorAll('td')[2];

        if (shareTD && resultadoTD) {
          const shareValue = porcentagens[i - 1];

          if (!isNaN(shareValue)) {
            const resultado = (this.inputValue * shareValue) / 100;
            const formattedResultado = resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            resultadoTD.textContent = formattedResultado;
            this.resultados.push(resultado);
          }
        }
      }

      this.resultadosAtualizados.emit(this.resultados);
    }
  }

  // calcular() {
  //   if (!isNaN(this.inputValue)) {
  //     this.resultados = [];
  //     const tableRows = document.querySelectorAll('.share-tpv tr');

  //     for (let i = 1; i < tableRows.length; i++) {
  //       const shareTD = tableRows[i].querySelectorAll('td')[1];
  //       const resultadoTD = tableRows[i].querySelectorAll('td')[2];

  //       if (shareTD && resultadoTD) {
  //         const shareText = shareTD.textContent;
  //         if (shareText) {
  //           const shareValue = parseFloat(shareText.replace('%', '').replace(',', '.'));
  //           if (!isNaN(shareValue)) {
  //             const resultado = (this.inputValue * shareValue) / 100;
  //             const formattedResultado = resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  //             resultadoTD.textContent = formattedResultado;
  //             this.resultados.push(resultado);

  //           }
  //         }
  //       }
  //     }
  //     this.resultadosAtualizados.emit(this.resultados);
  //   }
  // }

  convertToNumber(value: any): number {
    return !isNaN(value) ? Number(value) : 0;
  }
}

