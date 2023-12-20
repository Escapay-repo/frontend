import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IConfig, provideNgxMask } from 'ngx-mask';
import { maquininhaCrud } from '../../tabela/maquininhaCrud';
import { MaquininhaService } from '../maquininha.service';

export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;
@Component({
  selector: 'escapay-maquininha-create',
  templateUrl: './maquininha-create.component.html',
  styleUrls: ['../../tabela/tabela-create/tabela-create.component.css'],
  providers: [
    provideNgxMask()
  ]
})
export class MaquininhaCreateComponent implements OnInit {

  constructor
    (private router: Router,
      private maquininhaService: MaquininhaService,
    ) { }

  ngOnInit(): void { }

  table: maquininhaCrud = {
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
    }
  }

  masterToVisa(): void {
    this.table.debito.visa = this.table.debito.masterCard;
    this.table.credito.visa = this.table.credito.masterCard;
    this.table.duas.visa = this.table.duas.masterCard;
    this.table.tres.visa = this.table.tres.masterCard;
    this.table.quatro.visa = this.table.quatro.masterCard;
    this.table.cinco.visa = this.table.cinco.masterCard;
    this.table.seis.visa = this.table.seis.masterCard;
    this.table.sete.visa = this.table.sete.masterCard;
    this.table.oito.visa = this.table.oito.masterCard;
    this.table.nove.visa = this.table.nove.masterCard;
    this.table.dez.visa = this.table.dez.masterCard;
    this.table.onze.visa = this.table.onze.masterCard;
    this.table.doze.visa = this.table.doze.masterCard;
    this.table.treze.visa = this.table.treze.masterCard;
    this.table.quatorze.visa = this.table.quatorze.masterCard;
    this.table.quinze.visa = this.table.quinze.masterCard;
    this.table.dezesseis.visa = this.table.dezesseis.masterCard;
    this.table.dezessete.visa = this.table.dezessete.masterCard;
    this.table.dezoito.visa = this.table.dezoito.masterCard;
    this.table.dezenove.visa = this.table.dezenove.masterCard;
    this.table.vinte.visa = this.table.vinte.masterCard;
    this.table.vinteUm.visa = this.table.vinteUm.masterCard;
  }

  masterToOutros(): void {
    this.table.credito.outros = this.table.credito.masterCard;
    this.table.debito.outros = this.table.debito.masterCard;
    this.table.duas.outros = this.table.duas.masterCard;
    this.table.tres.outros = this.table.tres.masterCard;
    this.table.quatro.outros = this.table.quatro.masterCard;
    this.table.cinco.outros = this.table.cinco.masterCard;
    this.table.seis.outros = this.table.seis.masterCard;
    this.table.sete.outros = this.table.sete.masterCard;
    this.table.oito.outros = this.table.oito.masterCard;
    this.table.nove.outros = this.table.nove.masterCard;
    this.table.dez.outros = this.table.dez.masterCard;
    this.table.onze.outros = this.table.onze.masterCard;
    this.table.doze.outros = this.table.doze.masterCard;
    this.table.treze.outros = this.table.treze.masterCard;
    this.table.quatorze.outros = this.table.quatorze.masterCard;
    this.table.quinze.outros = this.table.quinze.masterCard;
    this.table.dezesseis.outros = this.table.dezesseis.masterCard;
    this.table.dezessete.outros = this.table.dezessete.masterCard;
    this.table.dezoito.outros = this.table.dezoito.masterCard;
    this.table.dezenove.outros = this.table.dezenove.masterCard;
    this.table.vinte.outros = this.table.vinte.masterCard;
    this.table.vinteUm.outros = this.table.vinteUm.masterCard;
  }

  visaToMaster(): void {
    this.table.credito.masterCard = this.table.credito.visa;
    this.table.debito.masterCard = this.table.debito.visa;
    this.table.duas.masterCard = this.table.duas.visa;
    this.table.tres.masterCard = this.table.tres.visa;
    this.table.quatro.masterCard = this.table.quatro.visa;
    this.table.cinco.masterCard = this.table.cinco.visa;
    this.table.seis.masterCard = this.table.seis.visa;
    this.table.sete.masterCard = this.table.sete.visa;
    this.table.oito.masterCard = this.table.oito.visa;
    this.table.nove.masterCard = this.table.nove.visa;
    this.table.dez.masterCard = this.table.dez.visa;
    this.table.onze.masterCard = this.table.onze.visa;
    this.table.doze.masterCard = this.table.doze.visa;
    this.table.treze.masterCard = this.table.treze.visa;
    this.table.quatorze.masterCard = this.table.quatorze.visa;
    this.table.quinze.masterCard = this.table.quinze.visa;
    this.table.dezesseis.masterCard = this.table.dezesseis.visa;
    this.table.dezessete.masterCard = this.table.dezessete.visa;
    this.table.dezoito.masterCard = this.table.dezoito.visa;
    this.table.dezenove.masterCard = this.table.dezenove.visa;
    this.table.vinte.masterCard = this.table.vinte.visa;
    this.table.vinteUm.masterCard = this.table.vinteUm.visa;
  }

  outrosToMaster(): void {
    this.table.credito.masterCard = this.table.credito.outros;
    this.table.debito.masterCard = this.table.debito.outros;
    this.table.duas.masterCard = this.table.duas.outros;
    this.table.tres.masterCard = this.table.tres.outros;
    this.table.quatro.masterCard = this.table.quatro.outros;
    this.table.cinco.masterCard = this.table.cinco.outros;
    this.table.seis.masterCard = this.table.seis.outros;
    this.table.sete.masterCard = this.table.sete.outros;
    this.table.oito.masterCard = this.table.oito.outros;
    this.table.nove.masterCard = this.table.nove.outros;
    this.table.dez.masterCard = this.table.dez.outros;
    this.table.onze.masterCard = this.table.onze.outros;
    this.table.doze.masterCard = this.table.doze.outros;
    this.table.treze.masterCard = this.table.treze.outros;
    this.table.quatorze.masterCard = this.table.quatorze.outros;
    this.table.quinze.masterCard = this.table.quinze.outros;
    this.table.dezesseis.masterCard = this.table.dezesseis.outros;
    this.table.dezessete.masterCard = this.table.dezessete.outros;
    this.table.dezoito.masterCard = this.table.dezoito.outros;
    this.table.dezenove.masterCard = this.table.dezenove.outros;
    this.table.vinte.masterCard = this.table.vinte.outros;
    this.table.vinteUm.masterCard = this.table.vinteUm.outros;
  }

  outrosToVisa(): void {
    this.table.credito.visa = this.table.credito.outros;
    this.table.debito.visa = this.table.debito.outros;
    this.table.duas.visa = this.table.duas.outros;
    this.table.tres.visa = this.table.tres.outros;
    this.table.quatro.visa = this.table.quatro.outros;
    this.table.cinco.visa = this.table.cinco.outros;
    this.table.seis.visa = this.table.seis.outros;
    this.table.sete.visa = this.table.sete.outros;
    this.table.oito.visa = this.table.oito.outros;
    this.table.nove.visa = this.table.nove.outros;
    this.table.dez.visa = this.table.dez.outros;
    this.table.onze.visa = this.table.onze.outros;
    this.table.doze.visa = this.table.doze.outros;
    this.table.treze.visa = this.table.treze.outros;
    this.table.quatorze.visa = this.table.quatorze.outros;
    this.table.quinze.visa = this.table.quinze.outros;
    this.table.dezesseis.visa = this.table.dezesseis.outros;
    this.table.dezessete.visa = this.table.dezessete.outros;
    this.table.dezoito.visa = this.table.dezoito.outros;
    this.table.dezenove.visa = this.table.dezenove.outros;
    this.table.vinte.visa = this.table.vinte.outros;
    this.table.vinteUm.visa = this.table.vinteUm.outros;
  }

  visaToOutros(): void {
    this.table.credito.outros = this.table.credito.visa;
    this.table.debito.outros = this.table.debito.visa;
    this.table.duas.outros = this.table.duas.visa;
    this.table.tres.outros = this.table.tres.visa;
    this.table.quatro.outros = this.table.quatro.visa;
    this.table.cinco.outros = this.table.cinco.visa;
    this.table.seis.outros = this.table.seis.visa;
    this.table.sete.outros = this.table.sete.visa;
    this.table.oito.outros = this.table.oito.visa;
    this.table.nove.outros = this.table.nove.visa;
    this.table.dez.outros = this.table.dez.visa;
    this.table.onze.outros = this.table.onze.visa;
    this.table.doze.outros = this.table.doze.visa;
    this.table.treze.outros = this.table.treze.visa;
    this.table.quatorze.outros = this.table.quatorze.visa;
    this.table.quinze.outros = this.table.quinze.visa;
    this.table.dezesseis.outros = this.table.dezesseis.visa;
    this.table.dezessete.outros = this.table.dezessete.visa;
    this.table.dezoito.outros = this.table.dezoito.visa;
    this.table.dezenove.outros = this.table.dezenove.visa;
    this.table.vinte.outros = this.table.vinte.visa;
    this.table.vinteUm.outros = this.table.vinteUm.visa;
  }

  salvarTabela(): void {
    this.table.debito.masterCard = parseFloat(this.table.debito.masterCard.toFixed(2));
    this.table.debito.visa = parseFloat(this.table.debito.visa.toFixed(2));
    this.table.debito.outros = parseFloat(this.table.debito.outros.toFixed(2));

    this.table.credito.masterCard = parseFloat(this.table.credito.masterCard.toFixed(2));
    this.table.credito.visa = parseFloat(this.table.credito.visa.toFixed(2));
    this.table.credito.outros = parseFloat(this.table.credito.outros.toFixed(2));

    this.table.duas.masterCard = parseFloat(this.table.duas.masterCard.toFixed(2));
    this.table.duas.visa = parseFloat(this.table.duas.visa.toFixed(2));
    this.table.duas.outros = parseFloat(this.table.duas.outros.toFixed(2));

    this.table.tres.masterCard = parseFloat(this.table.tres.masterCard.toFixed(2));
    this.table.tres.visa = parseFloat(this.table.tres.visa.toFixed(2));
    this.table.tres.outros = parseFloat(this.table.tres.outros.toFixed(2));

    this.table.quatro.masterCard = parseFloat(this.table.quatro.masterCard.toFixed(2));
    this.table.quatro.visa = parseFloat(this.table.quatro.visa.toFixed(2));
    this.table.quatro.outros = parseFloat(this.table.quatro.outros.toFixed(2));

    this.table.cinco.masterCard = parseFloat(this.table.cinco.masterCard.toFixed(2));
    this.table.cinco.visa = parseFloat(this.table.cinco.visa.toFixed(2));
    this.table.cinco.outros = parseFloat(this.table.cinco.outros.toFixed(2));

    this.table.seis.masterCard = parseFloat(this.table.seis.masterCard.toFixed(2));
    this.table.seis.visa = parseFloat(this.table.seis.visa.toFixed(2));
    this.table.seis.outros = parseFloat(this.table.seis.outros.toFixed(2));

    this.table.sete.masterCard = parseFloat(this.table.sete.masterCard.toFixed(2));
    this.table.sete.visa = parseFloat(this.table.sete.visa.toFixed(2));
    this.table.sete.outros = parseFloat(this.table.sete.outros.toFixed(2));

    this.table.oito.masterCard = parseFloat(this.table.oito.masterCard.toFixed(2));
    this.table.oito.visa = parseFloat(this.table.oito.visa.toFixed(2));
    this.table.oito.outros = parseFloat(this.table.oito.outros.toFixed(2));

    this.table.nove.masterCard = parseFloat(this.table.nove.masterCard.toFixed(2));
    this.table.nove.visa = parseFloat(this.table.nove.visa.toFixed(2));
    this.table.nove.outros = parseFloat(this.table.nove.outros.toFixed(2));

    this.table.dez.masterCard = parseFloat(this.table.dez.masterCard.toFixed(2));
    this.table.dez.visa = parseFloat(this.table.dez.visa.toFixed(2));
    this.table.dez.outros = parseFloat(this.table.dez.outros.toFixed(2));

    this.table.onze.masterCard = parseFloat(this.table.onze.masterCard.toFixed(2));
    this.table.onze.visa = parseFloat(this.table.onze.visa.toFixed(2));
    this.table.onze.outros = parseFloat(this.table.onze.outros.toFixed(2));

    this.table.doze.masterCard = parseFloat(this.table.doze.masterCard.toFixed(2));
    this.table.doze.visa = parseFloat(this.table.doze.visa.toFixed(2));
    this.table.doze.outros = parseFloat(this.table.doze.outros.toFixed(2));

    this.table.treze.masterCard = parseFloat(this.table.treze.masterCard.toFixed(2));
    this.table.treze.visa = parseFloat(this.table.treze.visa.toFixed(2));
    this.table.treze.outros = parseFloat(this.table.treze.outros.toFixed(2));

    this.table.quatorze.masterCard = parseFloat(this.table.quatorze.masterCard.toFixed(2));
    this.table.quatorze.visa = parseFloat(this.table.quatorze.visa.toFixed(2));
    this.table.quatorze.outros = parseFloat(this.table.quatorze.outros.toFixed(2));

    this.table.quinze.masterCard = parseFloat(this.table.quinze.masterCard.toFixed(2));
    this.table.quinze.visa = parseFloat(this.table.quinze.visa.toFixed(2));
    this.table.quinze.outros = parseFloat(this.table.quinze.outros.toFixed(2));

    this.table.dezesseis.masterCard = parseFloat(this.table.dezesseis.masterCard.toFixed(2));
    this.table.dezesseis.visa = parseFloat(this.table.dezesseis.visa.toFixed(2));
    this.table.dezesseis.outros = parseFloat(this.table.dezesseis.outros.toFixed(2));

    this.table.dezessete.masterCard = parseFloat(this.table.dezessete.masterCard.toFixed(2));
    this.table.dezessete.visa = parseFloat(this.table.dezessete.visa.toFixed(2));
    this.table.dezessete.outros = parseFloat(this.table.dezessete.outros.toFixed(2));

    this.table.dezoito.masterCard = parseFloat(this.table.dezoito.masterCard.toFixed(2));
    this.table.dezoito.visa = parseFloat(this.table.dezoito.visa.toFixed(2));
    this.table.dezoito.outros = parseFloat(this.table.dezoito.outros.toFixed(2));

    this.table.dezenove.masterCard = parseFloat(this.table.dezenove.masterCard.toFixed(2));
    this.table.dezenove.visa = parseFloat(this.table.dezenove.visa.toFixed(2));
    this.table.dezenove.outros = parseFloat(this.table.dezenove.outros.toFixed(2));

    this.table.vinte.masterCard = parseFloat(this.table.vinte.masterCard.toFixed(2));
    this.table.vinte.visa = parseFloat(this.table.vinte.visa.toFixed(2));
    this.table.vinte.outros = parseFloat(this.table.vinte.outros.toFixed(2));

    this.table.vinteUm.masterCard = parseFloat(this.table.vinteUm.masterCard.toFixed(2));
    this.table.vinteUm.visa = parseFloat(this.table.vinteUm.visa.toFixed(2));
    this.table.vinteUm.outros = parseFloat(this.table.vinteUm.outros.toFixed(2));

    this.maquininhaService.createMaquininha(this.table).subscribe((response) => {
      if (response && response.key) {
        this.table.key = response.key.toString();
        this.maquininhaService.showMessage('Tabela Criada')
        this.router.navigate(["/maquininhaHome"])
      }
    })
  }

  cancel(): void {
    this.router.navigate(["/maquininhaHome"])
  }

}
