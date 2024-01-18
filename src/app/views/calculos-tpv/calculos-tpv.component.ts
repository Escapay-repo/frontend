import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabelaService } from 'src/app/components/tabela/tabela-create/tabela.service';
import { tabelaCrud } from 'src/app/components/tabela/tabelaCrud';
import { HeaderService } from 'src/app/components/template/header/header.service';
import { IConfig, provideNgxMask } from 'ngx-mask';
import { maquininhaCrud } from 'src/app/components/tabela/maquininhaCrud';
import { LogicaService } from './logica.service';
import { TaxaCustoService } from './shared/taxa-custo/taxa-custo.service';

export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;

@Component({
  selector: 'escapay-calculos-tpv',
  templateUrl: './calculos-tpv.component.html',
  styleUrls: ['./calculos-tpv.component.css'],
  providers: [
    provideNgxMask()
  ]
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
  porcentagemCredito: number = 28.78;
  porcentagem2x: number = 11.94;
  porcentagem3x: number = 17.70;
  porcentagem4x: number = 7.25;
  porcentagem5x: number = 4.48;
  porcentagem6x: number = 4.26;
  porcentagem7x: number = 0.85;
  porcentagem8x: number = 2.13;
  porcentagem9x: number = 0;
  porcentagem10x: number = 10.45;
  porcentagem11x: number = 1.07;
  porcentagem12x: number = 7.25;
  porcentagem13x: number = 0.43;
  porcentagem14x: number = 0;
  porcentagem15x: number = 0.21;
  porcentagem16x: number = 0;
  porcentagem17x: number = 0.21;
  porcentagem18x: number = 1.28;
  porcentagem19x: number = 0.43;
  porcentagem20x: number = 0.21;
  porcentagem21x: number = 0.64;

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

  maquininhasDisponiveis: maquininhaCrud[] = [];
  maquininhaSelecionadaId: string | null = null;
  maquininhaTable!: maquininhaCrud

  tabelasDisponiveis: tabelaCrud[] = [];
  tabelaSelecionadaId: string | null = null;
  tabela!: tabelaCrud


  constructor(private headerService: HeaderService,
    private tabelaService: TabelaService,
    private route: ActivatedRoute,
    private logicaService: LogicaService,
    private taxaCustoService: TaxaCustoService,
  ) {
    headerService.headerData = {
      title: "Tabelas",
      icon: "format_list_bulleted",
      routeUrl: ""
    }
  }

  ngOnInit(): void {
    this.calcular();
    this.route.params.subscribe(params => {
      this.currentTableId = params['id'];
      this.tabelaService.readById(this.currentTableId).subscribe(table => {
        this.currentTable = table;
      });
    });

    //parte responsável por carregar taxas da maquininha
    const maquininhaId = this.route.snapshot.paramMap.get('id')
    if (maquininhaId) {
      this.logicaService.readMaquininha().subscribe(maquininhas => {
        this.maquininhasDisponiveis = maquininhas;
        if (this.maquininhasDisponiveis.length > 0) {
          this.maquininhaSelecionadaId = this.maquininhasDisponiveis[0]._id;
          this.atualizarMaquininha();
        }
      });
    }

    //parte responsável por carregar taxas da tabela
    const tabelaId = this.route.snapshot.paramMap.get('id')
    if (tabelaId) {
      this.logicaService.readTabela().subscribe(tabelas => {
        this.tabelasDisponiveis = tabelas;
        if (this.tabelasDisponiveis.length > 0) {
          this.tabelaSelecionadaId = this.tabelasDisponiveis[0]._id;
          this.atualizarMaquininha();
        }
      });
    }
  }

  // atualiza maquininha selecionada no dropdown
  atualizarMaquininha(): void {
    const maquininhaId = this.maquininhaSelecionadaId;
    // console.log('dropdown antes', this.maquininhasDisponiveis, this.maquininhaSelecionadaId, maquininhaId)
    if (maquininhaId) {
      // console.log('dropdown final', maquininhaId)
      this.logicaService.readMaquininhaById(maquininhaId).subscribe(maquininhaTable => {
        this.maquininhaTable = maquininhaTable;
        this.taxaCustoService.atualizarTabelaDados(maquininhaTable);
      });
    }
  }

  atualizarTabela(): void {
    const tabelasId = this.tabelaSelecionadaId;
    if (tabelasId) {
      this.logicaService.readTabelaById(tabelasId).subscribe(tabelasTable => {
        this.tabela = tabelasTable;
        this.taxaCustoService.atualizarTabelaDados(tabelasTable);
      });
    }
  }


  validarPorcentagem() {
    let porcentagemTotal =
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
      alert('A soma das porcentagens não pode ser superior a 100%.');
    } else {
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
  convertToNumber(value: any): number {
    return !isNaN(value) ? Number(value) : 0;
  }
}



