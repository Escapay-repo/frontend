import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabelaService } from 'src/app/components/tabela/tabela-create/tabela.service';
import { tabelaCrud } from 'src/app/components/tabela/tabelaCrud';
import { TaxaVendaService } from '../taxa-venda/taxa-venda.service';

@Component({
  selector: 'escapay-custo-client',
  templateUrl: './custo-client.component.html',
  styleUrls: ['./custo-client.component.css', '../../../../styles/bandeiras.css']
})
export class CustoClientComponent implements OnInit {
  table!: tabelaCrud

  custoReais: (porcentagemTabela: number) => number = porcentagemTabela => 1000 / ((100 - this.convertToNumber(porcentagemTabela)) / 100);

  @Input() resultados: Array<number> = [];
  @Input() tabelaSelecionada: tabelaCrud | null = null;
  tabelasDisponiveis: tabelaCrud[] = [];

  constructor(private tabelaService: TabelaService,
    private route: ActivatedRoute,
    private taxaVendaService: TaxaVendaService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id) {
      this.tabelaService.readById(id).subscribe(table => {
        this.table = table;
        this.taxaVendaService.atualizarTabelaDados(table);
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tabelaSelecionada'] && changes['tabelaSelecionada'].currentValue) {
      const tabelaId = changes['tabelaSelecionada'].currentValue._id;
      this.atualizarTabela(tabelaId);
    }
  }

  atualizarTabela(tabelaId: string): void {
    this.tabelaService.readById(tabelaId).subscribe(tabela => {
      this.table = tabela;
      this.taxaVendaService.atualizarTabelaDados(tabela);
    });
  }

  convertToNumber(value: any): number {
    return !isNaN(value) ? Number(value) : 0;
  }
}