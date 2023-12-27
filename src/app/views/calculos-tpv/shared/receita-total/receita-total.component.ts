import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabelaService } from 'src/app/components/tabela/tabela-create/tabela.service';
import { tabelaCrud } from 'src/app/components/tabela/tabelaCrud';
import { tabelaTaxaCusto } from 'src/app/components/tabela/tabelaTaxaCusto';
import { LogicaService } from '../../logica.service';
import { TaxaCustoService } from '../taxa-custo/taxa-custo.service';
import { MaquininhaService } from 'src/app/components/maquininha/maquininha.service';
import { TaxaVendaService } from '../taxa-venda/taxa-venda.service';
import { maquininhaCrud } from 'src/app/components/tabela/maquininhaCrud';

@Component({
  selector: 'escapay-receita-total',
  templateUrl: './receita-total.component.html',
  styleUrls: ['./receita-total.component.css']
})
export class ReceitaTotalComponent implements OnInit {
  masterShare: number = 50;
  visaShare: number = 38;
  outrosShare: number = 12;

  @Input() resultados: Array<number> = [];
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
    private logicaService: LogicaService,
    private taxaCustoService: TaxaCustoService,
    private maquininhaService: MaquininhaService,
    private taxaVendaService: TaxaVendaService,
  ) { }

  ngOnInit(): void {
    this.logicaService.sharesUpdated.subscribe(() => {
      this.masterShare = this.logicaService.masterShare;
      this.visaShare = this.logicaService.visaShare;
      this.outrosShare = this.logicaService.outrosShare;
    });
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
    this.tabelaService.readById(tabelaId).subscribe(table => {
      this.table = table;
      this.taxaVendaService.atualizarTabelaDados(table);
    });
  }
  convertToNumber(value: any): number {
    return !isNaN(value) ? Number(value) : 0;
  }

  calcularSoma(): number {
    const valor = ((
      ((this.resultados[0] * this.masterShare / 100) * (this.convertToNumber(this.table.debito.masterCard) - this.convertToNumber(this.maquininhaTable.debito.masterCard))) / 100 +
      ((this.resultados[0] * this.visaShare / 100) * (this.convertToNumber(this.table.debito.visa) - this.convertToNumber(this.maquininhaTable.debito.visa))) / 100 +
      ((this.resultados[0] * this.outrosShare / 100) * (this.convertToNumber(this.table.debito.outros) - this.convertToNumber(this.maquininhaTable.debito.outros))) / 100 +
      ((this.resultados[1] * this.masterShare / 100) * (this.convertToNumber(this.table.credito.masterCard) - this.convertToNumber(this.maquininhaTable.credito.masterCard))) / 100 +
      ((this.resultados[1] * this.visaShare / 100) * (this.convertToNumber(this.table.credito.visa) - this.convertToNumber(this.maquininhaTable.credito.visa))) / 100 +
      ((this.resultados[1] * this.outrosShare / 100) * (this.convertToNumber(this.table.credito.outros) - this.convertToNumber(this.maquininhaTable.credito.outros))) / 100 +
      ((this.resultados[2] * this.masterShare / 100) * (this.convertToNumber(this.table.duas.masterCard) - this.convertToNumber(this.maquininhaTable.duas.masterCard))) / 100 +
      ((this.resultados[2] * this.visaShare / 100) * (this.convertToNumber(this.table.duas.visa) - this.convertToNumber(this.maquininhaTable.duas.visa))) / 100 +
      ((this.resultados[2] * this.outrosShare / 100) * (this.convertToNumber(this.table.duas.outros) - this.convertToNumber(this.maquininhaTable.duas.outros))) / 100 +
      ((this.resultados[3] * this.masterShare / 100) * (this.convertToNumber(this.table.tres.masterCard) - this.convertToNumber(this.maquininhaTable.tres.masterCard))) / 100 +
      ((this.resultados[3] * this.visaShare / 100) * (this.convertToNumber(this.table.tres.visa) - this.convertToNumber(this.maquininhaTable.tres.visa))) / 100 +
      ((this.resultados[3] * this.outrosShare / 100) * (this.convertToNumber(this.table.tres.outros) - this.convertToNumber(this.maquininhaTable.tres.outros))) / 100 +
      ((this.resultados[4] * this.masterShare / 100) * (this.convertToNumber(this.table.quatro.masterCard) - this.convertToNumber(this.maquininhaTable.quatro.masterCard))) / 100 +
      ((this.resultados[4] * this.visaShare / 100) * (this.convertToNumber(this.table.quatro.visa) - this.convertToNumber(this.maquininhaTable.quatro.visa))) / 100 +
      ((this.resultados[4] * this.outrosShare / 100) * (this.convertToNumber(this.table.quatro.outros) - this.convertToNumber(this.maquininhaTable.quatro.outros))) / 100 +
      ((this.resultados[5] * this.masterShare / 100) * (this.convertToNumber(this.table.cinco.masterCard) - this.convertToNumber(this.maquininhaTable.cinco.masterCard))) / 100 +
      ((this.resultados[5] * this.visaShare / 100) * (this.convertToNumber(this.table.cinco.visa) - this.convertToNumber(this.maquininhaTable.cinco.visa))) / 100 +
      ((this.resultados[5] * this.outrosShare / 100) * (this.convertToNumber(this.table.cinco.outros) - this.convertToNumber(this.maquininhaTable.cinco.outros))) / 100 +
      ((this.resultados[6] * this.masterShare / 100) * (this.convertToNumber(this.table.seis.masterCard) - this.convertToNumber(this.maquininhaTable.seis.masterCard))) / 100 +
      ((this.resultados[6] * this.visaShare / 100) * (this.convertToNumber(this.table.seis.visa) - this.convertToNumber(this.maquininhaTable.seis.visa))) / 100 +
      ((this.resultados[6] * this.outrosShare / 100) * (this.convertToNumber(this.table.seis.outros) - this.convertToNumber(this.maquininhaTable.seis.outros))) / 100 +
      ((this.resultados[7] * this.masterShare / 100) * (this.convertToNumber(this.table.sete.masterCard) - this.convertToNumber(this.maquininhaTable.sete.masterCard))) / 100 +
      ((this.resultados[7] * this.visaShare / 100) * (this.convertToNumber(this.table.sete.visa) - this.convertToNumber(this.maquininhaTable.sete.visa))) / 100 +
      ((this.resultados[7] * this.outrosShare / 100) * (this.convertToNumber(this.table.sete.outros) - this.convertToNumber(this.maquininhaTable.sete.outros))) / 100 +
      ((this.resultados[8] * this.masterShare / 100) * (this.convertToNumber(this.table.oito.masterCard) - this.convertToNumber(this.maquininhaTable.oito.masterCard))) / 100 +
      ((this.resultados[8] * this.visaShare / 100) * (this.convertToNumber(this.table.oito.visa) - this.convertToNumber(this.maquininhaTable.oito.visa))) / 100 +
      ((this.resultados[8] * this.outrosShare / 100) * (this.convertToNumber(this.table.oito.outros) - this.convertToNumber(this.maquininhaTable.oito.outros))) / 100 +
      ((this.resultados[9] * this.masterShare / 100) * (this.convertToNumber(this.table.nove.masterCard) - this.convertToNumber(this.maquininhaTable.nove.masterCard))) / 100 +
      ((this.resultados[9] * this.visaShare / 100) * (this.convertToNumber(this.table.nove.visa) - this.convertToNumber(this.maquininhaTable.nove.visa))) / 100 +
      ((this.resultados[9] * this.outrosShare / 100) * (this.convertToNumber(this.table.nove.outros) - this.convertToNumber(this.maquininhaTable.nove.outros))) / 100 +
      ((this.resultados[10] * this.masterShare / 100) * (this.convertToNumber(this.table.dez.masterCard) - this.convertToNumber(this.maquininhaTable.dez.masterCard))) / 100 +
      ((this.resultados[10] * this.visaShare / 100) * (this.convertToNumber(this.table.dez.visa) - this.convertToNumber(this.maquininhaTable.dez.visa))) / 100 +
      ((this.resultados[10] * this.outrosShare / 100) * (this.convertToNumber(this.table.dez.outros) - this.convertToNumber(this.maquininhaTable.dez.outros))) / 100 +
      ((this.resultados[11] * this.masterShare / 100) * (this.convertToNumber(this.table.onze.masterCard) - this.convertToNumber(this.maquininhaTable.onze.masterCard))) / 100 +
      ((this.resultados[11] * this.visaShare / 100) * (this.convertToNumber(this.table.onze.visa) - this.convertToNumber(this.maquininhaTable.onze.visa))) / 100 +
      ((this.resultados[11] * this.outrosShare / 100) * (this.convertToNumber(this.table.onze.outros) - this.convertToNumber(this.maquininhaTable.onze.outros))) / 100 +
      ((this.resultados[12] * this.masterShare / 100) * (this.convertToNumber(this.table.doze.masterCard) - this.convertToNumber(this.maquininhaTable.doze.masterCard))) / 100 +
      ((this.resultados[12] * this.visaShare / 100) * (this.convertToNumber(this.table.doze.visa) - this.convertToNumber(this.maquininhaTable.doze.visa))) / 100 +
      ((this.resultados[12] * this.outrosShare / 100) * (this.convertToNumber(this.table.doze.outros) - this.convertToNumber(this.maquininhaTable.doze.outros))) / 100 +
      ((this.resultados[13] * this.masterShare / 100) * (this.convertToNumber(this.table.treze.masterCard) - this.convertToNumber(this.maquininhaTable.treze.masterCard))) / 100 +
      ((this.resultados[13] * this.visaShare / 100) * (this.convertToNumber(this.table.treze.visa) - this.convertToNumber(this.maquininhaTable.treze.visa))) / 100 +
      ((this.resultados[13] * this.outrosShare / 100) * (this.convertToNumber(this.table.treze.outros) - this.convertToNumber(this.maquininhaTable.treze.outros))) / 100 +
      ((this.resultados[14] * this.masterShare / 100) * (this.convertToNumber(this.table.quatorze.masterCard) - this.convertToNumber(this.maquininhaTable.quatorze.masterCard))) / 100 +
      ((this.resultados[14] * this.visaShare / 100) * (this.convertToNumber(this.table.quatorze.visa) - this.convertToNumber(this.maquininhaTable.quatorze.visa))) / 100 +
      ((this.resultados[14] * this.outrosShare / 100) * (this.convertToNumber(this.table.quatorze.outros) - this.convertToNumber(this.maquininhaTable.quatorze.outros))) / 100 +
      ((this.resultados[15] * this.masterShare / 100) * (this.convertToNumber(this.table.quinze.masterCard) - this.convertToNumber(this.maquininhaTable.quinze.masterCard))) / 100 +
      ((this.resultados[15] * this.visaShare / 100) * (this.convertToNumber(this.table.quinze.visa) - this.convertToNumber(this.maquininhaTable.quinze.visa))) / 100 +
      ((this.resultados[15] * this.outrosShare / 100) * (this.convertToNumber(this.table.quinze.outros) - this.convertToNumber(this.maquininhaTable.quinze.outros))) / 100 +
      ((this.resultados[16] * this.masterShare / 100) * (this.convertToNumber(this.table.dezesseis.masterCard) - this.convertToNumber(this.maquininhaTable.dezesseis.masterCard))) / 100 +
      ((this.resultados[16] * this.visaShare / 100) * (this.convertToNumber(this.table.dezesseis.visa) - this.convertToNumber(this.maquininhaTable.dezesseis.visa))) / 100 +
      ((this.resultados[16] * this.outrosShare / 100) * (this.convertToNumber(this.table.dezesseis.outros) - this.convertToNumber(this.maquininhaTable.dezesseis.outros))) / 100 +
      ((this.resultados[17] * this.masterShare / 100) * (this.convertToNumber(this.table.dezessete.masterCard) - this.convertToNumber(this.maquininhaTable.dezessete.masterCard))) / 100 +
      ((this.resultados[17] * this.visaShare / 100) * (this.convertToNumber(this.table.dezessete.visa) - this.convertToNumber(this.maquininhaTable.dezessete.visa))) / 100 +
      ((this.resultados[17] * this.outrosShare / 100) * (this.convertToNumber(this.table.dezessete.outros) - this.convertToNumber(this.maquininhaTable.dezessete.outros))) / 100 +
      ((this.resultados[18] * this.masterShare / 100) * (this.convertToNumber(this.table.dezoito.masterCard) - this.convertToNumber(this.maquininhaTable.dezoito.masterCard))) / 100 +
      ((this.resultados[18] * this.visaShare / 100) * (this.convertToNumber(this.table.dezoito.visa) - this.convertToNumber(this.maquininhaTable.dezoito.visa))) / 100 +
      ((this.resultados[18] * this.outrosShare / 100) * (this.convertToNumber(this.table.dezoito.outros) - this.convertToNumber(this.maquininhaTable.dezoito.outros))) / 100 +
      ((this.resultados[19] * this.masterShare / 100) * (this.convertToNumber(this.table.dezenove.masterCard) - this.convertToNumber(this.maquininhaTable.dezenove.masterCard))) / 100 +
      ((this.resultados[19] * this.visaShare / 100) * (this.convertToNumber(this.table.dezenove.visa) - this.convertToNumber(this.maquininhaTable.dezenove.visa))) / 100 +
      ((this.resultados[19] * this.outrosShare / 100) * (this.convertToNumber(this.table.dezenove.outros) - this.convertToNumber(this.maquininhaTable.dezenove.outros))) / 100 +
      ((this.resultados[20] * this.masterShare / 100) * (this.convertToNumber(this.table.vinte.masterCard) - this.convertToNumber(this.maquininhaTable.vinte.masterCard))) / 100 +
      ((this.resultados[20] * this.visaShare / 100) * (this.convertToNumber(this.table.vinte.visa) - this.convertToNumber(this.maquininhaTable.vinte.visa))) / 100 +
      ((this.resultados[20] * this.outrosShare / 100) * (this.convertToNumber(this.table.vinte.outros) - this.convertToNumber(this.maquininhaTable.vinte.outros))) / 100 +
      ((this.resultados[21] * this.masterShare / 100) * (this.convertToNumber(this.table.vinteUm.masterCard) - this.convertToNumber(this.maquininhaTable.vinteUm.masterCard))) / 100 +
      ((this.resultados[21] * this.visaShare / 100) * (this.convertToNumber(this.table.vinteUm.visa) - this.convertToNumber(this.maquininhaTable.vinteUm.visa))) / 100 +
      ((this.resultados[21] * this.outrosShare / 100) * (this.convertToNumber(this.table.vinteUm.outros) - this.convertToNumber(this.maquininhaTable.vinteUm.outros))) / 100
    ) * 0.94)
    return valor;
  }
}

