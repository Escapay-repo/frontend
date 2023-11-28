import { Component, OnInit } from '@angular/core';
import { tabelaCrud } from '../tabelaCrud';
import { TabelaService } from './tabela.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormatadorService } from 'src/app/services/formatador.service';

@Component({
  selector: 'escapay-tabela-create',
  templateUrl: './tabela-create.component.html',
  styleUrls: ['./tabela-create.component.css']
})
export class TabelaCreateComponent implements OnInit {
  table: tabelaCrud = {
    key: '',
    tableName: '',
    debito: {
      masterCard: { valor: 0 },
      visa: { valor: 0 },
      outros: { valor: 0 },
    },
    credito: {
      masterCard: { valor: 0 },
      visa: { valor: 0 },
      outros: { valor: 0 },
    },
    duas: {
      masterCard: { valor: 0 },
      visa: { valor: 0 },
      outros: { valor: 0 },
    },
    tres: {
      masterCard: { valor: 0 },
      visa: { valor: 0 },
      outros: { valor: 0 },
    },
    quatro: {
      masterCard: { valor: 0 },
      visa: { valor: 0 },
      outros: { valor: 0 },
    },
    cinco: {
      masterCard: { valor: 0 },
      visa: { valor: 0 },
      outros: { valor: 0 },
    },
    seis: {
      masterCard: { valor: 0 },
      visa: { valor: 0 },
      outros: { valor: 0 },
    },
    sete: {
      masterCard: { valor: 0 },
      visa: { valor: 0 },
      outros: { valor: 0 },
    },
    oito: {
      masterCard: { valor: 0 },
      visa: { valor: 0 },
      outros: { valor: 0 },
    },
    nove: {
      masterCard: { valor: 0 },
      visa: { valor: 0 },
      outros: { valor: 0 },
    },
    dez: {
      masterCard: { valor: 0 },
      visa: { valor: 0 },
      outros: { valor: 0 },
    },
    onze: {
      masterCard: { valor: 0 },
      visa: { valor: 0 },
      outros: { valor: 0 },
    },
    doze: {
      masterCard: { valor: 0 },
      visa: { valor: 0 },
      outros: { valor: 0 },
    },
    treze: {
      masterCard: { valor: 0 },
      visa: { valor: 0 },
      outros: { valor: 0 },
    },
    quatorze: {
      masterCard: { valor: 0 },
      visa: { valor: 0 },
      outros: { valor: 0 },
    },
    quinze: {
      masterCard: { valor: 0 },
      visa: { valor: 0 },
      outros: { valor: 0 },
    },
    dezesseis: {
      masterCard: { valor: 0 },
      visa: { valor: 0 },
      outros: { valor: 0 },
    },
    dezessete: {
      masterCard: { valor: 0 },
      visa: { valor: 0 },
      outros: { valor: 0 },
    },
    dezoito: {
      masterCard: { valor: 0 },
      visa: { valor: 0 },
      outros: { valor: 0 },
    },
    dezenove: {
      masterCard: { valor: 0 },
      visa: { valor: 0 },
      outros: { valor: 0 },
    },
    vinte: {
      masterCard: { valor: 0 },
      visa: { valor: 0 },
      outros: { valor: 0 },
    },
    vinteUm: {
      masterCard: { valor: 0 },
      visa: { valor: 0 },
      outros: { valor: 0 },
    }
  }

  constructor
    (private router: Router,
      private tabelaService: TabelaService,
      private http: HttpClient,
      private formatadorService: FormatadorService
    ) { }

    formatarNumero(event: number){
      console.log('event',event)
      if(event !== undefined && event !==null) {
        event = Number(event.toFixed(2))
      }
    }

    // formatarNumero(event: any): void {
      // console.log('event',event)
      // if (event.length > 2) {

      //   event = event.substring(0, 2) + '.' + event.substring(2, 4);
      // }
    //   const numeroDigitado = event;
    //   const numeroFormatado = this.formatadorService.formatarNumero(numeroDigitado);
    //     event = numeroFormatado;
    // }


  ngOnInit(): void {

  }

  masterToVisa(): void {
    this.table.credito.visa.valor = this.table.credito.masterCard.valor;
    this.table.debito.visa.valor = this.table.debito.masterCard.valor;
    this.table.duas.visa.valor = this.table.duas.masterCard.valor;
    this.table.tres.visa.valor = this.table.tres.masterCard.valor;
    this.table.quatro.visa.valor = this.table.quatro.masterCard.valor;
    this.table.cinco.visa.valor = this.table.cinco.masterCard.valor;
    this.table.seis.visa.valor = this.table.seis.masterCard.valor;
    this.table.sete.visa.valor = this.table.sete.masterCard.valor;
    this.table.oito.visa.valor = this.table.oito.masterCard.valor;
    this.table.nove.visa.valor = this.table.nove.masterCard.valor;
    this.table.dez.visa.valor = this.table.dez.masterCard.valor;
    this.table.onze.visa.valor = this.table.onze.masterCard.valor;
    this.table.doze.visa.valor = this.table.doze.masterCard.valor;
    this.table.treze.visa.valor = this.table.treze.masterCard.valor;
    this.table.quatorze.visa.valor = this.table.quatorze.masterCard.valor;
    this.table.quinze.visa.valor = this.table.quinze.masterCard.valor;
    this.table.dezesseis.visa.valor = this.table.dezesseis.masterCard.valor;
    this.table.dezessete.visa.valor = this.table.dezessete.masterCard.valor;
    this.table.dezoito.visa.valor = this.table.dezoito.masterCard.valor;
    this.table.dezenove.visa.valor = this.table.dezenove.masterCard.valor;
    this.table.vinte.visa.valor = this.table.vinte.masterCard.valor;
    this.table.vinteUm.visa.valor = this.table.vinteUm.masterCard.valor;
  }

  masterToOutros(): void {
    this.table.credito.outros.valor = this.table.credito.masterCard.valor;
    this.table.debito.outros.valor = this.table.debito.masterCard.valor;
    this.table.duas.outros.valor = this.table.duas.masterCard.valor;
    this.table.tres.outros.valor = this.table.tres.masterCard.valor;
    this.table.quatro.outros.valor = this.table.quatro.masterCard.valor;
    this.table.cinco.outros.valor = this.table.cinco.masterCard.valor;
    this.table.seis.outros.valor = this.table.seis.masterCard.valor;
    this.table.sete.outros.valor = this.table.sete.masterCard.valor;
    this.table.oito.outros.valor = this.table.oito.masterCard.valor;
    this.table.nove.outros.valor = this.table.nove.masterCard.valor;
    this.table.dez.outros.valor = this.table.dez.masterCard.valor;
    this.table.onze.outros.valor = this.table.onze.masterCard.valor;
    this.table.doze.outros.valor = this.table.doze.masterCard.valor;
    this.table.treze.outros.valor = this.table.treze.masterCard.valor;
    this.table.quatorze.outros.valor = this.table.quatorze.masterCard.valor;
    this.table.quinze.outros.valor = this.table.quinze.masterCard.valor;
    this.table.dezesseis.outros.valor = this.table.dezesseis.masterCard.valor;
    this.table.dezessete.outros.valor = this.table.dezessete.masterCard.valor;
    this.table.dezoito.outros.valor = this.table.dezoito.masterCard.valor;
    this.table.dezenove.outros.valor = this.table.dezenove.masterCard.valor;
    this.table.vinte.outros.valor = this.table.vinte.masterCard.valor;
    this.table.vinteUm.outros.valor = this.table.vinteUm.masterCard.valor;
  }

  visaToMaster(): void {
    this.table.credito.masterCard.valor = this.table.credito.visa.valor;
    this.table.debito.masterCard.valor = this.table.debito.visa.valor;
    this.table.duas.masterCard.valor = this.table.duas.visa.valor;
    this.table.tres.masterCard.valor = this.table.tres.visa.valor;
    this.table.quatro.masterCard.valor = this.table.quatro.visa.valor;
    this.table.cinco.masterCard.valor = this.table.cinco.visa.valor;
    this.table.seis.masterCard.valor = this.table.seis.visa.valor;
    this.table.sete.masterCard.valor = this.table.sete.visa.valor;
    this.table.oito.masterCard.valor = this.table.oito.visa.valor;
    this.table.nove.masterCard.valor = this.table.nove.visa.valor;
    this.table.dez.masterCard.valor = this.table.dez.visa.valor;
    this.table.onze.masterCard.valor = this.table.onze.visa.valor;
    this.table.doze.masterCard.valor = this.table.doze.visa.valor;
    this.table.treze.masterCard.valor = this.table.treze.visa.valor;
    this.table.quatorze.masterCard.valor = this.table.quatorze.visa.valor;
    this.table.quinze.masterCard.valor = this.table.quinze.visa.valor;
    this.table.dezesseis.masterCard.valor = this.table.dezesseis.visa.valor;
    this.table.dezessete.masterCard.valor = this.table.dezessete.visa.valor;
    this.table.dezoito.masterCard.valor = this.table.dezoito.visa.valor;
    this.table.dezenove.masterCard.valor = this.table.dezenove.visa.valor;
    this.table.vinte.masterCard.valor = this.table.vinte.visa.valor;
    this.table.vinteUm.masterCard.valor = this.table.vinteUm.visa.valor;
  }

  outrosToMaster(): void {
    this.table.credito.masterCard.valor = this.table.credito.outros.valor;
    this.table.debito.masterCard.valor = this.table.debito.outros.valor;
    this.table.duas.masterCard.valor = this.table.duas.outros.valor;
    this.table.tres.masterCard.valor = this.table.tres.outros.valor;
    this.table.quatro.masterCard.valor = this.table.quatro.outros.valor;
    this.table.cinco.masterCard.valor = this.table.cinco.outros.valor;
    this.table.seis.masterCard.valor = this.table.seis.outros.valor;
    this.table.sete.masterCard.valor = this.table.sete.outros.valor;
    this.table.oito.masterCard.valor = this.table.oito.outros.valor;
    this.table.nove.masterCard.valor = this.table.nove.outros.valor;
    this.table.dez.masterCard.valor = this.table.dez.outros.valor;
    this.table.onze.masterCard.valor = this.table.onze.outros.valor;
    this.table.doze.masterCard.valor = this.table.doze.outros.valor;
    this.table.treze.masterCard.valor = this.table.treze.outros.valor;
    this.table.quatorze.masterCard.valor = this.table.quatorze.outros.valor;
    this.table.quinze.masterCard.valor = this.table.quinze.outros.valor;
    this.table.dezesseis.masterCard.valor = this.table.dezesseis.outros.valor;
    this.table.dezessete.masterCard.valor = this.table.dezessete.outros.valor;
    this.table.dezoito.masterCard.valor = this.table.dezoito.outros.valor;
    this.table.dezenove.masterCard.valor = this.table.dezenove.outros.valor;
    this.table.vinte.masterCard.valor = this.table.vinte.outros.valor;
    this.table.vinteUm.masterCard.valor = this.table.vinteUm.outros.valor;
  }

  outrosToVisa(): void {
    this.table.credito.visa.valor = this.table.credito.outros.valor;
    this.table.debito.visa.valor = this.table.debito.outros.valor;
    this.table.duas.visa.valor = this.table.duas.outros.valor;
    this.table.tres.visa.valor = this.table.tres.outros.valor;
    this.table.quatro.visa.valor = this.table.quatro.outros.valor;
    this.table.cinco.visa.valor = this.table.cinco.outros.valor;
    this.table.seis.visa.valor = this.table.seis.outros.valor;
    this.table.sete.visa.valor = this.table.sete.outros.valor;
    this.table.oito.visa.valor = this.table.oito.outros.valor;
    this.table.nove.visa.valor = this.table.nove.outros.valor;
    this.table.dez.visa.valor = this.table.dez.outros.valor;
    this.table.onze.visa.valor = this.table.onze.outros.valor;
    this.table.doze.visa.valor = this.table.doze.outros.valor;
    this.table.treze.visa.valor = this.table.treze.outros.valor;
    this.table.quatorze.visa.valor = this.table.quatorze.outros.valor;
    this.table.quinze.visa.valor = this.table.quinze.outros.valor;
    this.table.dezesseis.visa.valor = this.table.dezesseis.outros.valor;
    this.table.dezessete.visa.valor = this.table.dezessete.outros.valor;
    this.table.dezoito.visa.valor = this.table.dezoito.outros.valor;
    this.table.dezenove.visa.valor = this.table.dezenove.outros.valor;
    this.table.vinte.visa.valor = this.table.vinte.outros.valor;
    this.table.vinteUm.visa.valor = this.table.vinteUm.outros.valor;
  }

  visaToOutros(): void {
    this.table.credito.outros.valor = this.table.credito.visa.valor;
    this.table.debito.outros.valor = this.table.debito.visa.valor;
    this.table.duas.outros.valor = this.table.duas.visa.valor;
    this.table.tres.outros.valor = this.table.tres.visa.valor;
    this.table.quatro.outros.valor = this.table.quatro.visa.valor;
    this.table.cinco.outros.valor = this.table.cinco.visa.valor;
    this.table.seis.outros.valor = this.table.seis.visa.valor;
    this.table.sete.outros.valor = this.table.sete.visa.valor;
    this.table.oito.outros.valor = this.table.oito.visa.valor;
    this.table.nove.outros.valor = this.table.nove.visa.valor;
    this.table.dez.outros.valor = this.table.dez.visa.valor;
    this.table.onze.outros.valor = this.table.onze.visa.valor;
    this.table.doze.outros.valor = this.table.doze.visa.valor;
    this.table.treze.outros.valor = this.table.treze.visa.valor;
    this.table.quatorze.outros.valor = this.table.quatorze.visa.valor;
    this.table.quinze.outros.valor = this.table.quinze.visa.valor;
    this.table.dezesseis.outros.valor = this.table.dezesseis.visa.valor;
    this.table.dezessete.outros.valor = this.table.dezessete.visa.valor;
    this.table.dezoito.outros.valor = this.table.dezoito.visa.valor;
    this.table.dezenove.outros.valor = this.table.dezenove.visa.valor;
    this.table.vinte.outros.valor = this.table.vinte.visa.valor;
    this.table.vinteUm.outros.valor = this.table.vinteUm.visa.valor;
  }


  salvarTabela(): void {
    this.table.debito.masterCard.valor = this.table.debito.masterCard.valor;
    this.table.debito.visa.valor = this.table.debito.visa.valor;
    this.table.debito.outros.valor = this.table.debito.outros.valor;

    this.table.credito.masterCard.valor = this.table.credito.masterCard.valor;
    this.table.credito.visa.valor = this.table.credito.visa.valor;
    this.table.credito.outros.valor = this.table.credito.outros.valor;

    this.table.duas.masterCard.valor = this.table.duas.masterCard.valor;
    this.table.duas.visa.valor = this.table.duas.visa.valor;
    this.table.duas.outros.valor = this.table.duas.outros.valor;

    this.table.tres.masterCard.valor = this.table.tres.masterCard.valor;
    this.table.tres.visa.valor = this.table.tres.visa.valor;
    this.table.tres.outros.valor = this.table.tres.outros.valor;

    this.table.quatro.masterCard.valor = this.table.quatro.masterCard.valor;
    this.table.quatro.visa.valor = this.table.quatro.visa.valor;
    this.table.quatro.outros.valor = this.table.quatro.outros.valor;

    this.table.cinco.masterCard.valor = this.table.cinco.masterCard.valor;
    this.table.cinco.visa.valor = this.table.cinco.visa.valor;
    this.table.cinco.outros.valor = this.table.cinco.outros.valor;

    this.table.seis.masterCard.valor = this.table.seis.masterCard.valor;
    this.table.seis.visa.valor = this.table.seis.visa.valor;
    this.table.seis.outros.valor = this.table.seis.outros.valor;

    this.table.sete.masterCard.valor = this.table.sete.masterCard.valor;
    this.table.sete.visa.valor = this.table.sete.visa.valor;
    this.table.sete.outros.valor = this.table.sete.outros.valor;

    this.table.oito.masterCard.valor = this.table.oito.masterCard.valor;
    this.table.oito.visa.valor = this.table.oito.visa.valor;
    this.table.oito.outros.valor = this.table.oito.outros.valor;

    this.table.nove.masterCard.valor = this.table.nove.masterCard.valor;
    this.table.nove.visa.valor = this.table.nove.visa.valor;
    this.table.nove.outros.valor = this.table.nove.outros.valor;

    this.table.dez.masterCard.valor = this.table.dez.masterCard.valor;
    this.table.dez.visa.valor = this.table.dez.visa.valor;
    this.table.dez.outros.valor = this.table.dez.outros.valor;

    this.table.onze.masterCard.valor = this.table.onze.masterCard.valor;
    this.table.onze.visa.valor = this.table.onze.visa.valor;
    this.table.onze.outros.valor = this.table.onze.outros.valor;

    this.table.doze.masterCard.valor = this.table.doze.masterCard.valor;
    this.table.doze.visa.valor = this.table.doze.visa.valor;
    this.table.doze.outros.valor = this.table.doze.outros.valor;

    this.table.treze.masterCard.valor = this.table.treze.masterCard.valor;
    this.table.treze.visa.valor = this.table.treze.visa.valor;
    this.table.treze.outros.valor = this.table.treze.outros.valor;

    this.table.quatorze.masterCard.valor = this.table.quatorze.masterCard.valor;
    this.table.quatorze.visa.valor = this.table.quatorze.visa.valor;
    this.table.quatorze.outros.valor = this.table.quatorze.outros.valor;

    this.table.quinze.masterCard.valor = this.table.quinze.masterCard.valor;
    this.table.quinze.visa.valor = this.table.quinze.visa.valor;
    this.table.quinze.outros.valor = this.table.quinze.outros.valor;

    this.table.dezesseis.masterCard.valor = this.table.dezesseis.masterCard.valor;
    this.table.dezesseis.visa.valor = this.table.dezesseis.visa.valor;
    this.table.dezesseis.outros.valor = this.table.dezesseis.outros.valor;

    this.table.dezessete.masterCard.valor = this.table.dezessete.masterCard.valor;
    this.table.dezessete.visa.valor = this.table.dezessete.visa.valor;
    this.table.dezessete.outros.valor = this.table.dezessete.outros.valor;

    this.table.dezoito.masterCard.valor = this.table.dezoito.masterCard.valor;
    this.table.dezoito.visa.valor = this.table.dezoito.visa.valor;
    this.table.dezoito.outros.valor = this.table.dezoito.outros.valor;

    this.table.dezenove.masterCard.valor = this.table.dezenove.masterCard.valor;
    this.table.dezenove.visa.valor = this.table.dezenove.visa.valor;
    this.table.dezenove.outros.valor = this.table.dezenove.outros.valor;

    this.table.vinte.masterCard.valor = this.table.vinte.masterCard.valor;
    this.table.vinte.visa.valor = this.table.vinte.visa.valor;
    this.table.vinte.outros.valor = this.table.vinte.outros.valor;

    this.table.vinteUm.masterCard.valor = this.table.vinteUm.masterCard.valor;
    this.table.vinteUm.visa.valor = this.table.vinteUm.visa.valor;
    this.table.vinteUm.outros.valor = this.table.vinteUm.outros.valor;

    this.tabelaService.create(this.table).subscribe((response) => {
      if (response && response.key) {
        this.table.key = response.key.toString();
        this.tabelaService.showMessage('Tabela Criada')
        this.router.navigate([""])
      }
    })
  }

  cancel(): void {
    this.router.navigate([""])
  }
}