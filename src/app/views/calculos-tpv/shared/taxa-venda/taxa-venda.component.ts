import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TabelaService } from 'src/app/components/tabela/tabela-create/tabela.service';
import { tabelaCrud } from 'src/app/components/tabela/tabelaCrud';


@Component({
  selector: 'escapay-taxa-venda',
  templateUrl: './taxa-venda.component.html',
  styleUrls: ['./taxa-venda.component.css']
})
export class TaxaVendaComponent implements OnInit {
  table!: tabelaCrud
  taxasVenda: Array<{ master: number, visa: number, outros: number }> = [];

  constructor(private tabelaService: TabelaService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

    if (id) {
      this.tabelaService.readById(id).subscribe(table => {
        this.table = table;
        // this.convertTableToTaxasVenda();
      });
    }
  }
  // convertTableToTaxasVenda(): void {
  //   if (this.table) {
  //     this.taxasVenda = [
  //       {
  //         master: this.table.debito.masterCard.valor,
  //         visa: this.table.debito.visa.valor,
  //         outros: this.table.debito.outros.valor
  //       },
  //       {
  //         master: this.table.credito.masterCard.valor,
  //         visa: this.table.credito.visa.valor,
  //         outros: this.table.credito.outros.valor
  //       },
  //       {
  //         master: this.table.duas.masterCard.valor,
  //         visa: this.table.duas.visa.valor,
  //         outros: this.table.duas.outros.valor
  //       },
  //       {
  //         master: this.table.tres.masterCard.valor,
  //         visa: this.table.tres.visa.valor,
  //         outros: this.table.tres.outros.valor
  //       },
  //       {
  //         master: this.table.quatro.masterCard.valor,
  //         visa: this.table.quatro.visa.valor,
  //         outros: this.table.quatro.outros.valor
  //       },
  //       {
  //         master: this.table.cinco.masterCard.valor,
  //         visa: this.table.cinco.visa.valor,
  //         outros: this.table.cinco.outros.valor
  //       },
  //       {
  //         master: this.table.seis.masterCard.valor,
  //         visa: this.table.seis.visa.valor,
  //         outros: this.table.seis.outros.valor
  //       },
  //       {
  //         master: this.table.sete.masterCard.valor,
  //         visa: this.table.sete.visa.valor,
  //         outros: this.table.sete.outros.valor
  //       },
  //       {
  //         master: this.table.oito.masterCard.valor,
  //         visa: this.table.oito.visa.valor,
  //         outros: this.table.oito.outros.valor
  //       },
  //       {
  //         master: this.table.nove.masterCard.valor,
  //         visa: this.table.nove.visa.valor,
  //         outros: this.table.nove.outros.valor
  //       },
  //       {
  //         master: this.table.dez.masterCard.valor,
  //         visa: this.table.dez.visa.valor,
  //         outros: this.table.dez.outros.valor
  //       },
  //       {
  //         master: this.table.onze.masterCard.valor,
  //         visa: this.table.onze.visa.valor,
  //         outros: this.table.onze.outros.valor
  //       },
  //       {
  //         master: this.table.doze.masterCard.valor,
  //         visa: this.table.doze.visa.valor,
  //         outros: this.table.doze.outros.valor
  //       },
  //       {
  //         master: this.table.treze.masterCard.valor,
  //         visa: this.table.treze.visa.valor,
  //         outros: this.table.treze.outros.valor
  //       },
  //       {
  //         master: this.table.quatorze.masterCard.valor,
  //         visa: this.table.quatorze.visa.valor,
  //         outros: this.table.quatorze.outros.valor
  //       },
  //       {
  //         master: this.table.quinze.masterCard.valor,
  //         visa: this.table.quinze.visa.valor,
  //         outros: this.table.quinze.outros.valor
  //       },
  //       {
  //         master: this.table.dezesseis.masterCard.valor,
  //         visa: this.table.dezesseis.visa.valor,
  //         outros: this.table.dezesseis.outros.valor
  //       },
  //       {
  //         master: this.table.dezessete.masterCard.valor,
  //         visa: this.table.dezessete.visa.valor,
  //         outros: this.table.dezessete.outros.valor
  //       },
  //       {
  //         master: this.table.dezoito.masterCard.valor,
  //         visa: this.table.dezoito.visa.valor,
  //         outros: this.table.dezoito.outros.valor
  //       },
  //       {
  //         master: this.table.dezenove.masterCard.valor,
  //         visa: this.table.dezenove.visa.valor,
  //         outros: this.table.dezenove.outros.valor
  //       },
  //       {
  //         master: this.table.vinte.masterCard.valor,
  //         visa: this.table.vinte.visa.valor,
  //         outros: this.table.vinte.outros.valor
  //       },
  //       {
  //         master: this.table.vinteUm.masterCard.valor,
  //         visa: this.table.vinteUm.visa.valor,
  //         outros: this.table.vinteUm.outros.valor
  //       },
  //     ];
  //   }
  // }
}