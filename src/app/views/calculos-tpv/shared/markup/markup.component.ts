import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { tabelaCrud } from 'src/app/components/tabela/tabelaCrud';
import { TabelaService } from 'src/app/components/tabela/tabela-create/tabela.service';
import { ActivatedRoute } from '@angular/router';
import { maquininhaCrud } from 'src/app/components/tabela/maquininhaCrud';
import { TaxaCustoService } from '../taxa-custo/taxa-custo.service';
import { MaquininhaService } from 'src/app/components/maquininha/maquininha.service';
import { TaxaVendaService } from '../taxa-venda/taxa-venda.service';

@Component({
  selector: 'escapay-markup',
  templateUrl: './markup.component.html',
  styleUrls: ['./markup.component.css', '../../../../styles/bandeiras.css']
})
export class MarkupComponent implements OnInit {
  @Input() tabelaSelecionada: tabelaCrud | null = null;
  tabelasDisponiveis: tabelaCrud[] = [];
  table: tabelaCrud = {
    _id: '',
    key: '',
    tableName: '',
    debito: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    credito: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    duas: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    tres: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    quatro: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    cinco: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    seis: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    sete: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    oito: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    nove: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    dez: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    onze: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    doze: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    treze: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    quatorze: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    quinze: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    dezesseis: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    dezessete: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    dezoito: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    dezenove: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    vinte: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    vinteUm: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
  }
  taxaCusto: maquininhaCrud | null = null
  @Input() maquininhaSelecionada: maquininhaCrud | null = null;
  maquininhasDisponiveis: maquininhaCrud[] = [];
  maquininhaTable: maquininhaCrud = {
    _id: '',
    key: '',
    tableName: '',
    debito: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    credito: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    duas: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    tres: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    quatro: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    cinco: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    seis: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    sete: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    oito: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    nove: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    dez: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    onze: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    doze: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    treze: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    quatorze: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    quinze: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    dezesseis: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    dezessete: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    dezoito: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    dezenove: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    vinte: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
    vinteUm: {
      masterCard: 0,
      visa: 0,
      outros: 0,
    },
  }

  constructor(private tabelaService: TabelaService,
    private route: ActivatedRoute,
    private taxaCustoService: TaxaCustoService,
    private maquininhaService: MaquininhaService,
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
    this.maquininhaService.read().subscribe(tabelas => {
      this.maquininhasDisponiveis = tabelas;
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['maquininhaSelecionada'] && changes['maquininhaSelecionada'].currentValue) {
      const maquininhaId = changes['maquininhaSelecionada'].currentValue._id;
      this.atualizarMaquininha(maquininhaId);
    }
    if (changes['tabelaSelecionada'] && changes['tabelaSelecionada'].currentValue) {
      const tabelaId = changes['tabelaSelecionada'].currentValue._id;
      this.atualizarTabela(tabelaId);
    }
  }

  atualizarMaquininha(maquininhaId: string): void {
    this.maquininhaService.readById(maquininhaId).subscribe(maquininhaTable => {
      this.maquininhaTable = maquininhaTable;
      this.taxaCustoService.atualizarTabelaDados(maquininhaTable);
    });
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