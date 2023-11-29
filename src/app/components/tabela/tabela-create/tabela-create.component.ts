import { Component, OnInit } from '@angular/core';
import { tabelaCrud } from '../tabelaCrud';
import { TabelaService } from './tabela.service';
import { Router } from '@angular/router';
import { FormatadorService } from 'src/app/services/formatador.service';
import { DecimalPipe } from '@angular/common';

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

  constructor
    (private router: Router,
      private tabelaService: TabelaService,
      private formatadorService: FormatadorService,
      private decimalPipe: DecimalPipe
    ) { }

    
    formatarNumero(numeroDigitado: number): string{
      const numeroFormatado = this.formatadorService.formatarNumero(numeroDigitado);
      return numeroFormatado;
    }

    formatarNumeroStringParaNumber(valor: string): number {
      const numero = parseFloat(valor);
      return isNaN(numero) ? 0 : numero;
    }

    converterParaNumero(valorFormatado: string): number {
      const valorNumerico = parseFloat(valorFormatado.replace('%', '').replace('.', ''));
      return isNaN(valorNumerico) ? 0 : valorNumerico;
    }

  ngOnInit(): void {

  }

  masterToVisa(): void {
    this.table.credito.visa = Number(this.table.credito.masterCard.toFixed(2));
    this.table.debito.visa =  Number(this.table.debito.masterCard.toFixed(2));
    this.table.duas.visa = Number(this.table.duas.masterCard.toFixed(2));
    this.table.tres.visa = Number(this.table.tres.masterCard.toFixed(2));
    this.table.quatro.visa = Number(this.table.quatro.masterCard.toFixed(2));
    this.table.cinco.visa = Number(this.table.cinco.masterCard.toFixed(2));
    this.table.seis.visa = Number(this.table.seis.masterCard.toFixed(2));
    this.table.sete.visa = Number(this.table.sete.masterCard.toFixed(2));
    this.table.oito.visa = Number(this.table.oito.masterCard.toFixed(2));
    this.table.nove.visa = Number(this.table.nove.masterCard.toFixed(2));
    this.table.dez.visa = Number(this.table.dez.masterCard.toFixed(2));
    this.table.onze.visa = Number(this.table.onze.masterCard.toFixed(2));
    this.table.doze.visa = Number(this.table.doze.masterCard.toFixed(2));
    this.table.treze.visa = Number(this.table.treze.masterCard.toFixed(2));
    this.table.quatorze.visa = Number(this.table.quatorze.masterCard.toFixed(2));
    this.table.quinze.visa = Number(this.table.quinze.masterCard.toFixed(2));
    this.table.dezesseis.visa = Number(this.table.dezesseis.masterCard.toFixed(2));
    this.table.dezessete.visa = Number(this.table.dezessete.masterCard.toFixed(2));
    this.table.dezoito.visa = Number(this.table.dezoito.masterCard.toFixed(2));
    this.table.dezenove.visa = Number(this.table.dezenove.masterCard.toFixed(2));
    this.table.vinte.visa = Number(this.table.vinte.masterCard.toFixed(2));
    this.table.vinteUm.visa = Number(this.table.vinteUm.masterCard.toFixed(2));
  }

  masterToOutros(): void {
    this.table.credito.outros = Number(this.table.credito.masterCard.toFixed(2));
    this.table.debito.outros = Number(this.table.debito.masterCard.toFixed(2));
    this.table.duas.outros = Number(this.table.duas.masterCard.toFixed(2));
    this.table.tres.outros = Number(this.table.tres.masterCard.toFixed(2));
    this.table.quatro.outros = Number(this.table.quatro.masterCard.toFixed(2));
    this.table.cinco.outros = Number(this.table.cinco.masterCard.toFixed(2));
    this.table.seis.outros = Number(this.table.seis.masterCard.toFixed(2));
    this.table.sete.outros = Number(this.table.sete.masterCard.toFixed(2));
    this.table.oito.outros = Number(this.table.oito.masterCard.toFixed(2));
    this.table.nove.outros = Number(this.table.nove.masterCard.toFixed(2));
    this.table.dez.outros = Number(this.table.dez.masterCard.toFixed(2));
    this.table.onze.outros = Number(this.table.onze.masterCard.toFixed(2));
    this.table.doze.outros = Number(this.table.doze.masterCard.toFixed(2));
    this.table.treze.outros = Number(this.table.treze.masterCard.toFixed(2));
    this.table.quatorze.outros = Number(this.table.quatorze.masterCard.toFixed(2));
    this.table.quinze.outros = Number(this.table.quinze.masterCard.toFixed(2));
    this.table.dezesseis.outros = Number(this.table.dezesseis.masterCard.toFixed(2));
    this.table.dezessete.outros = Number(this.table.dezessete.masterCard.toFixed(2));
    this.table.dezoito.outros = Number(this.table.dezoito.masterCard.toFixed(2));
    this.table.dezenove.outros = Number(this.table.dezenove.masterCard.toFixed(2));
    this.table.vinte.outros = Number(this.table.vinte.masterCard.toFixed(2));
    this.table.vinteUm.outros = Number(this.table.vinteUm.masterCard.toFixed(2));
  }

  visaToMaster(): void {
    this.table.credito.masterCard = Number(this.table.credito.visa.toFixed(2));
    this.table.debito.masterCard = Number(this.table.debito.visa.toFixed(2));
    this.table.duas.masterCard = Number(this.table.duas.visa.toFixed(2));
    this.table.tres.masterCard = Number(this.table.tres.visa.toFixed(2));
    this.table.quatro.masterCard = Number(this.table.quatro.visa.toFixed(2));
    this.table.cinco.masterCard = Number(this.table.cinco.visa.toFixed(2));
    this.table.seis.masterCard = Number(this.table.seis.visa.toFixed(2));
    this.table.sete.masterCard = Number(this.table.sete.visa.toFixed(2));
    this.table.oito.masterCard = Number(this.table.oito.visa.toFixed(2));
    this.table.nove.masterCard = Number(this.table.nove.visa.toFixed(2));
    this.table.dez.masterCard = Number(this.table.dez.visa.toFixed(2));
    this.table.onze.masterCard = Number(this.table.onze.visa.toFixed(2));
    this.table.doze.masterCard = Number(this.table.doze.visa.toFixed(2));
    this.table.treze.masterCard = Number(this.table.treze.visa.toFixed(2));
    this.table.quatorze.masterCard = Number(this.table.quatorze.visa.toFixed(2));
    this.table.quinze.masterCard = Number(this.table.quinze.visa.toFixed(2));
    this.table.dezesseis.masterCard = Number(this.table.dezesseis.visa.toFixed(2));
    this.table.dezessete.masterCard = Number(this.table.dezessete.visa.toFixed(2));
    this.table.dezoito.masterCard = Number(this.table.dezoito.visa.toFixed(2));
    this.table.dezenove.masterCard = Number(this.table.dezenove.visa.toFixed(2));
    this.table.vinte.masterCard = Number(this.table.vinte.visa.toFixed(2));
    this.table.vinteUm.masterCard = Number(this.table.vinteUm.visa.toFixed(2));
  }

  outrosToMaster(): void {
    this.table.credito.masterCard = Number(this.table.credito.outros.toFixed(2));
    this.table.debito.masterCard = Number(this.table.debito.outros.toFixed(2));
    this.table.duas.masterCard = Number(this.table.duas.outros.toFixed(2));
    this.table.tres.masterCard = Number(this.table.tres.outros.toFixed(2));
    this.table.quatro.masterCard = Number(this.table.quatro.outros.toFixed(2));
    this.table.cinco.masterCard = Number(this.table.cinco.outros.toFixed(2));
    this.table.seis.masterCard = Number(this.table.seis.outros.toFixed(2));
    this.table.sete.masterCard = Number(this.table.sete.outros.toFixed(2));
    this.table.oito.masterCard = Number(this.table.oito.outros.toFixed(2));
    this.table.nove.masterCard = Number(this.table.nove.outros.toFixed(2));
    this.table.dez.masterCard = Number(this.table.dez.outros.toFixed(2));
    this.table.onze.masterCard = Number(this.table.onze.outros.toFixed(2));
    this.table.doze.masterCard = Number(this.table.doze.outros.toFixed(2));
    this.table.treze.masterCard = Number(this.table.treze.outros.toFixed(2));
    this.table.quatorze.masterCard = Number(this.table.quatorze.outros.toFixed(2));
    this.table.quinze.masterCard = Number(this.table.quinze.outros.toFixed(2));
    this.table.dezesseis.masterCard = Number(this.table.dezesseis.outros.toFixed(2));
    this.table.dezessete.masterCard = Number(this.table.dezessete.outros.toFixed(2));
    this.table.dezoito.masterCard = Number(this.table.dezoito.outros.toFixed(2));
    this.table.dezenove.masterCard = Number(this.table.dezenove.outros.toFixed(2));
    this.table.vinte.masterCard = Number(this.table.vinte.outros.toFixed(2));
    this.table.vinteUm.masterCard = Number(this.table.vinteUm.outros.toFixed(2));
  }

  outrosToVisa(): void {
    this.table.credito.visa = Number(this.table.credito.outros.toFixed(2));
    this.table.debito.visa = Number(this.table.debito.outros.toFixed(2));
    this.table.duas.visa = Number(this.table.duas.outros.toFixed(2));
    this.table.tres.visa = Number(this.table.tres.outros.toFixed(2));
    this.table.quatro.visa = Number(this.table.quatro.outros.toFixed(2));
    this.table.cinco.visa = Number(this.table.cinco.outros.toFixed(2));
    this.table.seis.visa = Number(this.table.seis.outros.toFixed(2));
    this.table.sete.visa = Number(this.table.sete.outros.toFixed(2));
    this.table.oito.visa = Number(this.table.oito.outros.toFixed(2));
    this.table.nove.visa = Number(this.table.nove.outros.toFixed(2));
    this.table.dez.visa = Number(this.table.dez.outros.toFixed(2));
    this.table.onze.visa = Number(this.table.onze.outros.toFixed(2));
    this.table.doze.visa = Number(this.table.doze.outros.toFixed(2));
    this.table.treze.visa = Number(this.table.treze.outros.toFixed(2));
    this.table.quatorze.visa = Number(this.table.quatorze.outros.toFixed(2));
    this.table.quinze.visa = Number(this.table.quinze.outros.toFixed(2));
    this.table.dezesseis.visa = Number(this.table.dezesseis.outros.toFixed(2));
    this.table.dezessete.visa = Number(this.table.dezessete.outros.toFixed(2));
    this.table.dezoito.visa = Number(this.table.dezoito.outros.toFixed(2));
    this.table.dezenove.visa = Number(this.table.dezenove.outros.toFixed(2));
    this.table.vinte.visa = Number(this.table.vinte.outros.toFixed(2));
    this.table.vinteUm.visa = Number(this.table.vinteUm.outros.toFixed(2));
  }

  visaToOutros(): void {
    this.table.credito.outros = Number(this.table.credito.visa.toFixed(2));
    this.table.debito.outros = Number(this.table.debito.visa.toFixed(2));
    this.table.duas.outros = Number(this.table.duas.visa.toFixed(2));
    this.table.tres.outros = Number(this.table.tres.visa.toFixed(2));
    this.table.quatro.outros = Number(this.table.quatro.visa.toFixed(2));
    this.table.cinco.outros = Number(this.table.cinco.visa.toFixed(2));
    this.table.seis.outros = Number(this.table.seis.visa.toFixed(2));
    this.table.sete.outros = Number(this.table.sete.visa.toFixed(2));
    this.table.oito.outros = Number(this.table.oito.visa.toFixed(2));
    this.table.nove.outros = Number(this.table.nove.visa.toFixed(2));
    this.table.dez.outros = Number(this.table.dez.visa.toFixed(2));
    this.table.onze.outros = Number(this.table.onze.visa.toFixed(2));
    this.table.doze.outros = Number(this.table.doze.visa.toFixed(2));
    this.table.treze.outros = Number(this.table.treze.visa.toFixed(2));
    this.table.quatorze.outros = Number(this.table.quatorze.visa.toFixed(2));
    this.table.quinze.outros = Number(this.table.quinze.visa.toFixed(2));
    this.table.dezesseis.outros = Number(this.table.dezesseis.visa.toFixed(2));
    this.table.dezessete.outros = Number(this.table.dezessete.visa.toFixed(2));
    this.table.dezoito.outros = Number(this.table.dezoito.visa.toFixed(2));
    this.table.dezenove.outros = Number(this.table.dezenove.visa.toFixed(2));
    this.table.vinte.outros = Number(this.table.vinte.visa.toFixed(2));
    this.table.vinteUm.outros = Number(this.table.vinteUm.visa.toFixed(2));
  }


  salvarTabela(): void {
    this.table.debito.masterCard = parseFloat(this.table.debito.masterCard.toFixed(2));
    this.table.debito.visa =  parseFloat(this.table.debito.visa.toFixed(2));
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




    // formatarNumero(event: any): void {
      // console.log('event',event)
      // if (event.length > 2) {

      //   event = event.substring(0, 2) + '.' + event.substring(2, 4);
      // }
    //   const numeroDigitado = event;
    //   const numeroFormatado = this.formatadorService.formatarNumero(numeroDigitado);
    //     event = numeroFormatado;
    // }
