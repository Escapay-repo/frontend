import { MaquininhaService } from './../../../../components/maquininha/maquininha.service';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TaxaCustoService } from './taxa-custo.service';
import { tabelaTaxaCusto } from 'src/app/components/tabela/tabelaTaxaCusto';
import { maquininhaCrud } from 'src/app/components/tabela/maquininhaCrud';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'escapay-taxa-custo',
  templateUrl: './taxa-custo.component.html',
  styleUrls: ['./taxa-custo.component.css', '../../../../styles/bandeiras.css']
})
export class TaxaCustoComponent implements OnInit {
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

  constructor(
    private maquininhaService: MaquininhaService,
    private taxaCustoService: TaxaCustoService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.maquininhaService.read().subscribe(tabelas => {
      this.maquininhasDisponiveis = tabelas;
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['maquininhaSelecionada'] && changes['maquininhaSelecionada'].currentValue) {
      const maquininhaId = changes['maquininhaSelecionada'].currentValue._id;
      this.atualizarMaquininha(maquininhaId);
    }
  }

  atualizarMaquininha(maquininhaId: string): void {
    this.maquininhaService.readById(maquininhaId).subscribe(maquininhaTable => {
      this.maquininhaTable = maquininhaTable;
      this.taxaCustoService.atualizarTabelaDados(maquininhaTable);
    });
  }
}

