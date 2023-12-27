import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TabelaService } from 'src/app/components/tabela/tabela-create/tabela.service';
import { tabelaCrud } from 'src/app/components/tabela/tabelaCrud';
import { TaxaVendaService } from './taxa-venda.service';
import { FormatadorService } from 'src/app/services/formatador.service';

@Component({
  selector: 'escapay-taxa-venda',
  templateUrl: './taxa-venda.component.html',
  styleUrls: ['./taxa-venda.component.css', '../../../../styles/bandeiras.css']
})
export class TaxaVendaComponent implements OnInit {
  tabelaDados: { master: number, visa: number, outros: number }[] = [];
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

  constructor(private tabelaService: TabelaService,
    private route: ActivatedRoute,
    private taxaVendaService: TaxaVendaService,
    private formatadorService: FormatadorService,
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

  formatarNumero(numeroDigitado: number): string {
    const numeroFormatado = this.formatadorService.formatarVirgula(numeroDigitado);
    return numeroFormatado;
  }
}
