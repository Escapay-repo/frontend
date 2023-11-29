import { Component, Input, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabelaService } from 'src/app/components/tabela/tabela-create/tabela.service';
import { tabelaCrud } from 'src/app/components/tabela/tabelaCrud';
import { tabelaTaxaCusto } from 'src/app/components/tabela/tabelaTaxaCusto';

@Component({
  selector: 'escapay-receita-franqueado',
  templateUrl: './receita-franqueado.component.html',
  styleUrls: ['./receita-franqueado.component.css']
})
export class ReceitaFranqueadoComponent implements OnInit {
  @Input() resultados: Array<number> = [];
  taxaCusto = tabelaTaxaCusto;
  table!: tabelaCrud

  constructor(private tabelaService: TabelaService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id) {
      this.tabelaService.readById(id).subscribe(table => {
        this.table = table;
      });
    }
  }
  convertToNumber(value: any): number {
    return !isNaN(value) ? Number(value) : 0;
  }

  calcularSoma(): number {
    const valor =((
      ((this.resultados[0] * 0.5) * (this.convertToNumber(this.table.debito.masterCard) - this.convertToNumber(this.taxaCusto.debito.masterCard))) / 100 +
      ((this.resultados[0] * 0.38) * (this.convertToNumber(this.table.debito.visa) - this.convertToNumber(this.taxaCusto.debito.visa))) / 100 +
      ((this.resultados[0] * 0.12) * (this.convertToNumber(this.table.debito.outros) - this.convertToNumber(this.taxaCusto.debito.outros))) / 100 +
      ((this.resultados[1] * 0.5) * (this.convertToNumber(this.table.credito.masterCard) - this.convertToNumber(this.taxaCusto.credito.masterCard))) / 100 +
      ((this.resultados[1] * 0.38) * (this.convertToNumber(this.table.credito.visa) - this.convertToNumber(this.taxaCusto.credito.visa))) / 100 +
      ((this.resultados[1] * 0.12) * (this.convertToNumber(this.table.credito.outros) - this.convertToNumber(this.taxaCusto.credito.outros))) / 100 +
      ((this.resultados[2] * 0.5) * (this.convertToNumber(this.table.duas.masterCard) - this.convertToNumber(this.taxaCusto.duas.masterCard))) / 100 +
      ((this.resultados[2] * 0.38) * (this.convertToNumber(this.table.duas.visa) - this.convertToNumber(this.taxaCusto.duas.visa))) / 100 +
      ((this.resultados[2] * 0.12) * (this.convertToNumber(this.table.duas.outros) - this.convertToNumber(this.taxaCusto.duas.outros))) / 100 +
      ((this.resultados[3] * 0.5) * (this.convertToNumber(this.table.tres.masterCard) - this.convertToNumber(this.taxaCusto.tres.masterCard))) / 100 +
      ((this.resultados[3] * 0.38) * (this.convertToNumber(this.table.tres.visa) - this.convertToNumber(this.taxaCusto.tres.visa))) / 100 +
      ((this.resultados[3] * 0.12) * (this.convertToNumber(this.table.tres.outros) - this.convertToNumber(this.taxaCusto.tres.outros))) / 100 +
      ((this.resultados[4] * 0.5) * (this.convertToNumber(this.table.quatro.masterCard) - this.convertToNumber(this.taxaCusto.quatro.masterCard))) / 100 +
      ((this.resultados[4] * 0.38) * (this.convertToNumber(this.table.quatro.visa) - this.convertToNumber(this.taxaCusto.quatro.visa))) / 100 +
      ((this.resultados[4] * 0.12) * (this.convertToNumber(this.table.quatro.outros) - this.convertToNumber(this.taxaCusto.quatro.outros))) / 100 +
      ((this.resultados[5] * 0.5) * (this.convertToNumber(this.table.cinco.masterCard) - this.convertToNumber(this.taxaCusto.cinco.masterCard))) / 100 +
      ((this.resultados[5] * 0.38) * (this.convertToNumber(this.table.cinco.visa) - this.convertToNumber(this.taxaCusto.cinco.visa))) / 100 +
      ((this.resultados[5] * 0.12) * (this.convertToNumber(this.table.cinco.outros) - this.convertToNumber(this.taxaCusto.cinco.outros))) / 100 +
      ((this.resultados[6] * 0.5) * (this.convertToNumber(this.table.seis.masterCard) - this.convertToNumber(this.taxaCusto.seis.masterCard))) / 100 +
      ((this.resultados[6] * 0.38) * (this.convertToNumber(this.table.seis.visa) - this.convertToNumber(this.taxaCusto.seis.visa))) / 100 +
      ((this.resultados[6] * 0.12) * (this.convertToNumber(this.table.seis.outros) - this.convertToNumber(this.taxaCusto.seis.outros))) / 100 +
      ((this.resultados[7] * 0.5) * (this.convertToNumber(this.table.sete.masterCard) - this.convertToNumber(this.taxaCusto.sete.masterCard))) / 100 +
      ((this.resultados[7] * 0.38) * (this.convertToNumber(this.table.sete.visa) - this.convertToNumber(this.taxaCusto.sete.visa))) / 100 +
      ((this.resultados[7] * 0.12) * (this.convertToNumber(this.table.sete.outros) - this.convertToNumber(this.taxaCusto.sete.outros))) / 100 +
      ((this.resultados[8] * 0.5) * (this.convertToNumber(this.table.oito.masterCard) - this.convertToNumber(this.taxaCusto.oito.masterCard))) / 100 +
      ((this.resultados[8] * 0.38) * (this.convertToNumber(this.table.oito.visa) - this.convertToNumber(this.taxaCusto.oito.visa))) / 100 +
      ((this.resultados[8] * 0.12) * (this.convertToNumber(this.table.oito.outros) - this.convertToNumber(this.taxaCusto.oito.outros))) / 100 +
      ((this.resultados[9] * 0.5) * (this.convertToNumber(this.table.nove.masterCard) - this.convertToNumber(this.taxaCusto.nove.masterCard))) / 100 +
      ((this.resultados[9] * 0.38) * (this.convertToNumber(this.table.nove.visa) - this.convertToNumber(this.taxaCusto.nove.visa))) / 100 +
      ((this.resultados[9] * 0.12) * (this.convertToNumber(this.table.nove.outros) - this.convertToNumber(this.taxaCusto.nove.outros))) / 100 +
      ((this.resultados[10] * 0.5) * (this.convertToNumber(this.table.dez.masterCard) - this.convertToNumber(this.taxaCusto.dez.masterCard))) / 100 +
      ((this.resultados[10] * 0.38) * (this.convertToNumber(this.table.dez.visa) - this.convertToNumber(this.taxaCusto.dez.visa))) / 100 +
      ((this.resultados[10] * 0.12) * (this.convertToNumber(this.table.dez.outros) - this.convertToNumber(this.taxaCusto.dez.outros))) / 100 +
      ((this.resultados[11] * 0.5) * (this.convertToNumber(this.table.onze.masterCard) - this.convertToNumber(this.taxaCusto.onze.masterCard))) / 100 +
      ((this.resultados[11] * 0.38) * (this.convertToNumber(this.table.onze.visa) - this.convertToNumber(this.taxaCusto.onze.visa))) / 100 +
      ((this.resultados[11] * 0.12) * (this.convertToNumber(this.table.onze.outros) - this.convertToNumber(this.taxaCusto.onze.outros))) / 100 +
      ((this.resultados[12] * 0.5) * (this.convertToNumber(this.table.doze.masterCard) - this.convertToNumber(this.taxaCusto.doze.masterCard))) / 100 +
      ((this.resultados[12] * 0.38) * (this.convertToNumber(this.table.doze.visa) - this.convertToNumber(this.taxaCusto.doze.visa))) / 100 +
      ((this.resultados[12] * 0.12) * (this.convertToNumber(this.table.doze.outros) - this.convertToNumber(this.taxaCusto.doze.outros))) / 100 +
      ((this.resultados[13] * 0.5) * (this.convertToNumber(this.table.treze.masterCard) - this.convertToNumber(this.taxaCusto.treze.masterCard))) / 100 +
      ((this.resultados[13] * 0.38) * (this.convertToNumber(this.table.treze.visa) - this.convertToNumber(this.taxaCusto.treze.visa))) / 100 +
      ((this.resultados[13] * 0.12) * (this.convertToNumber(this.table.treze.outros) - this.convertToNumber(this.taxaCusto.treze.outros))) / 100 +
      ((this.resultados[14] * 0.5) * (this.convertToNumber(this.table.quatorze.masterCard) - this.convertToNumber(this.taxaCusto.quatorze.masterCard))) / 100 +
      ((this.resultados[14] * 0.38) * (this.convertToNumber(this.table.quatorze.visa) - this.convertToNumber(this.taxaCusto.quatorze.visa))) / 100 +
      ((this.resultados[14] * 0.12) * (this.convertToNumber(this.table.quatorze.outros) - this.convertToNumber(this.taxaCusto.quatorze.outros))) / 100 +
      ((this.resultados[15] * 0.5) * (this.convertToNumber(this.table.quinze.masterCard) - this.convertToNumber(this.taxaCusto.quinze.masterCard))) / 100 +
      ((this.resultados[15] * 0.38) * (this.convertToNumber(this.table.quinze.visa) - this.convertToNumber(this.taxaCusto.quinze.visa))) / 100 +
      ((this.resultados[15] * 0.12) * (this.convertToNumber(this.table.quinze.outros) - this.convertToNumber(this.taxaCusto.quinze.outros))) / 100 +
      ((this.resultados[16] * 0.5) * (this.convertToNumber(this.table.dezesseis.masterCard) - this.convertToNumber(this.taxaCusto.dezesseis.masterCard))) / 100 +
      ((this.resultados[16] * 0.38) * (this.convertToNumber(this.table.dezesseis.visa) - this.convertToNumber(this.taxaCusto.dezesseis.visa))) / 100 +
      ((this.resultados[16] * 0.12) * (this.convertToNumber(this.table.dezesseis.outros) - this.convertToNumber(this.taxaCusto.dezesseis.outros))) / 100 +
      ((this.resultados[17] * 0.5) * (this.convertToNumber(this.table.dezessete.masterCard) - this.convertToNumber(this.taxaCusto.dezessete.masterCard))) / 100 +
      ((this.resultados[17] * 0.38) * (this.convertToNumber(this.table.dezessete.visa) - this.convertToNumber(this.taxaCusto.dezessete.visa))) / 100 +
      ((this.resultados[17] * 0.12) * (this.convertToNumber(this.table.dezessete.outros) - this.convertToNumber(this.taxaCusto.dezessete.outros))) / 100 +
      ((this.resultados[18] * 0.5) * (this.convertToNumber(this.table.dezoito.masterCard) - this.convertToNumber(this.taxaCusto.dezoito.masterCard))) / 100 +
      ((this.resultados[18] * 0.38) * (this.convertToNumber(this.table.dezoito.visa) - this.convertToNumber(this.taxaCusto.dezoito.visa))) / 100 +
      ((this.resultados[18] * 0.12) * (this.convertToNumber(this.table.dezoito.outros) - this.convertToNumber(this.taxaCusto.dezoito.outros))) / 100 +
      ((this.resultados[19] * 0.5) * (this.convertToNumber(this.table.dezenove.masterCard) - this.convertToNumber(this.taxaCusto.dezenove.masterCard))) / 100 +
      ((this.resultados[19] * 0.38) * (this.convertToNumber(this.table.dezenove.visa) - this.convertToNumber(this.taxaCusto.dezenove.visa))) / 100 +
      ((this.resultados[19] * 0.12) * (this.convertToNumber(this.table.dezenove.outros) - this.convertToNumber(this.taxaCusto.dezenove.outros))) / 100 +
      ((this.resultados[20] * 0.5) * (this.convertToNumber(this.table.vinte.masterCard) - this.convertToNumber(this.taxaCusto.vinte.masterCard))) / 100 +
      ((this.resultados[20] * 0.38) * (this.convertToNumber(this.table.vinte.visa) - this.convertToNumber(this.taxaCusto.vinte.visa))) / 100 +
      ((this.resultados[20] * 0.12) * (this.convertToNumber(this.table.vinte.outros) - this.convertToNumber(this.taxaCusto.vinte.outros))) / 100 +
      ((this.resultados[21] * 0.5) * (this.convertToNumber(this.table.vinteUm.masterCard) - this.convertToNumber(this.taxaCusto.vinteUm.masterCard))) / 100 +
      ((this.resultados[21] * 0.38) * (this.convertToNumber(this.table.vinteUm.visa) - this.convertToNumber(this.taxaCusto.vinteUm.visa))) / 100 +
      ((this.resultados[21] * 0.12) * (this.convertToNumber(this.table.vinteUm.outros) - this.convertToNumber(this.taxaCusto.vinteUm.outros))) / 100    
    ) * 0.845) * 0.40
    return valor;
  }
}

