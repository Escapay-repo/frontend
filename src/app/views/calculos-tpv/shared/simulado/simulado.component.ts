import { Component, Input, OnInit } from '@angular/core';
import { TabelaService } from 'src/app/components/tabela/tabela-create/tabela.service';
import { tabelaCrud } from 'src/app/components/tabela/tabelaCrud';
import { LogicaService } from '../../logica.service';
import { TaxaCustoService } from '../taxa-custo/taxa-custo.service';

@Component({
  selector: 'escapay-simulado',
  templateUrl: './simulado.component.html',
  styleUrls: ['./simulado.component.css']
})
export class SimuladoComponent implements OnInit {
  table!: tabelaCrud;
  @Input() tabelaSelecionada: tabelaCrud | null = null;
  tabelasDisponiveis: tabelaCrud[] = [];
  tabelaSelecionadaId: string | undefined;


  constructor(
    private tabelaService: TabelaService,
    private logicaService: LogicaService,
    private taxaCustoService: TaxaCustoService,
  ) { }

  ngOnInit(): void {
    this.tabelaService.readAllTables().subscribe((tables) => {
      this.tabelasDisponiveis = tables;
    });
  }

  atualizarTabela(): void {
    const tabelasId = this.tabelaSelecionadaId;
    if (tabelasId) {
      this.logicaService.readTabelaById(tabelasId).subscribe(tabelasTable => {
        this.table = tabelasTable;
        this.taxaCustoService.atualizarTabelaDados(tabelasTable);
      });
    }
  }

  custoReais: (porcentagemTabela: number) => number = porcentagemTabela => 1000 / ((100 - this.convertToNumber(porcentagemTabela)) / 100);

  convertToNumber(value: any): number {
    return !isNaN(value) ? Number(value) : 0;
  }
}