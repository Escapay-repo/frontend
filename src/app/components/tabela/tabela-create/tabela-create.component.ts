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
  table: any = {
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

    formatarNumero(event: any): void {
      const numeroDigitado = event.target.value;
      const numeroFormatado = this.formatadorService.formatarNumero(numeroDigitado);
        event.target.value = numeroFormatado;
    }


  ngOnInit(): void {

  }

  masterToVisa(): void {
    this.table.credito.visa = this.table.credito.masterCard;
    this.table.debito.visa = this.table.debito.masterCard;
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
    this.table.debito.masterCard = parseFloat(this.table.debito.masterCard);
    this.table.debito.visa = parseFloat(this.table.debito.visa);
    this.table.debito.outros = parseFloat(this.table.debito.outros);

    this.table.credito.masterCard = parseFloat(this.table.credito.masterCard);
    this.table.credito.visa = parseFloat(this.table.credito.visa);
    this.table.credito.outros = parseFloat(this.table.credito.outros);

    this.table.duas.masterCard = parseFloat(this.table.duas.masterCard);
    this.table.duas.visa = parseFloat(this.table.duas.visa);
    this.table.duas.outros = parseFloat(this.table.duas.outros);

    this.table.tres.masterCard = parseFloat(this.table.tres.masterCard);
    this.table.tres.visa = parseFloat(this.table.tres.visa);
    this.table.tres.outros = parseFloat(this.table.tres.outros);

    this.table.quatro.masterCard = parseFloat(this.table.quatro.masterCard);
    this.table.quatro.visa = parseFloat(this.table.quatro.visa);
    this.table.quatro.outros = parseFloat(this.table.quatro.outros);

    this.table.cinco.masterCard = parseFloat(this.table.cinco.masterCard);
    this.table.cinco.visa = parseFloat(this.table.cinco.visa);
    this.table.cinco.outros = parseFloat(this.table.cinco.outros);

    this.table.seis.masterCard = parseFloat(this.table.seis.masterCard);
    this.table.seis.visa = parseFloat(this.table.seis.visa);
    this.table.seis.outros = parseFloat(this.table.seis.outros);

    this.table.sete.masterCard = parseFloat(this.table.sete.masterCard);
    this.table.sete.visa = parseFloat(this.table.sete.visa);
    this.table.sete.outros = parseFloat(this.table.sete.outros);

    this.table.oito.masterCard = parseFloat(this.table.oito.masterCard);
    this.table.oito.visa = parseFloat(this.table.oito.visa);
    this.table.oito.outros = parseFloat(this.table.oito.outros);

    this.table.nove.masterCard = parseFloat(this.table.nove.masterCard);
    this.table.nove.visa = parseFloat(this.table.nove.visa);
    this.table.nove.outros = parseFloat(this.table.nove.outros);

    this.table.dez.masterCard = parseFloat(this.table.dez.masterCard);
    this.table.dez.visa = parseFloat(this.table.dez.visa);
    this.table.dez.outros = parseFloat(this.table.dez.outros);

    this.table.onze.masterCard = parseFloat(this.table.onze.masterCard);
    this.table.onze.visa = parseFloat(this.table.onze.visa);
    this.table.onze.outros = parseFloat(this.table.onze.outros);

    this.table.doze.masterCard = parseFloat(this.table.doze.masterCard);
    this.table.doze.visa = parseFloat(this.table.doze.visa);
    this.table.doze.outros = parseFloat(this.table.doze.outros);

    this.table.treze.masterCard = parseFloat(this.table.treze.masterCard);
    this.table.treze.visa = parseFloat(this.table.treze.visa);
    this.table.treze.outros = parseFloat(this.table.treze.outros);

    this.table.quatorze.masterCard = parseFloat(this.table.quatorze.masterCard);
    this.table.quatorze.visa = parseFloat(this.table.quatorze.visa);
    this.table.quatorze.outros = parseFloat(this.table.quatorze.outros);

    this.table.quinze.masterCard = parseFloat(this.table.quinze.masterCard);
    this.table.quinze.visa = parseFloat(this.table.quinze.visa);
    this.table.quinze.outros = parseFloat(this.table.quinze.outros);

    this.table.dezesseis.masterCard = parseFloat(this.table.dezesseis.masterCard);
    this.table.dezesseis.visa = parseFloat(this.table.dezesseis.visa);
    this.table.dezesseis.outros = parseFloat(this.table.dezesseis.outros);

    this.table.dezessete.masterCard = parseFloat(this.table.dezessete.masterCard);
    this.table.dezessete.visa = parseFloat(this.table.dezessete.visa);
    this.table.dezessete.outros = parseFloat(this.table.dezessete.outros);

    this.table.dezoito.masterCard = parseFloat(this.table.dezoito.masterCard);
    this.table.dezoito.visa = parseFloat(this.table.dezoito.visa);
    this.table.dezoito.outros = parseFloat(this.table.dezoito.outros);

    this.table.dezenove.masterCard = parseFloat(this.table.dezenove.masterCard);
    this.table.dezenove.visa = parseFloat(this.table.dezenove.visa);
    this.table.dezenove.outros = parseFloat(this.table.dezenove.outros);

    this.table.vinte.masterCard = parseFloat(this.table.vinte.masterCard);
    this.table.vinte.visa = parseFloat(this.table.vinte.visa);
    this.table.vinte.outros = parseFloat(this.table.vinte.outros);

    this.table.vinteUm.masterCard = parseFloat(this.table.vinteUm.masterCard);
    this.table.vinteUm.visa = parseFloat(this.table.vinteUm.visa);
    this.table.vinteUm.outros = parseFloat(this.table.vinteUm.outros);

    this.tabelaService.create(this.table).subscribe((response) => {
      if (response && response.key) {
        this.table.key = response.key.toString();
        this.tabelaService.showMessage('Tabela Criada')
        this.router.navigate([""])
      }
    })
  }

  private copyNumericValues(source: any, destination: any): void {
    destination.valor = this.formatadorService.formatarNumero(source.valor.toString());
  }

  cancel(): void {
    this.router.navigate([""])
  }
}