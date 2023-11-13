import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabelaService } from 'src/app/components/tabela/tabela-create/tabela.service';
import { tabelaCrud } from 'src/app/components/tabela/tabelaCrud';
import { tabelaTaxaCusto } from 'src/app/components/tabela/tabelaTaxaCusto';
import { CalculosService } from '../calculos.service';

@Component({
  selector: 'escapay-markup-bandeiras',
  templateUrl: './markup-bandeiras.component.html',
  styleUrls: ['./markup-bandeiras.component.css']
})
export class MarkupBandeirasComponent implements OnInit {
  @Input() percent50: number = 50;
  @Input() percent38: number = 38;
  @Input() percent12: number = 12;
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
        console.log("tabela markup tablecrud", this.table.debito.visa.valor);
      });
    }
  }

  convertToNumber(value: any): number {
    return !isNaN(value) ? Number(value) : 0;
  }

  calcularSoma(): number {
    const soma = this.resultados.reduce((acc, resultado, index) => {
      const percent50 = this.percent50 / 100;
      const percent38 = this.percent38 / 100;
      const percent12 = this.percent12 / 100;
      
      const valor =
        (resultado * percent50 * this.convertToNumber(this.table.debito.masterCard) - this.convertToNumber(this.taxaCusto.debito.masterCard.valor)) +
        (resultado * percent38 * this.convertToNumber(this.table.debito.visa) - this.convertToNumber(this.taxaCusto.debito.visa.valor)) +
        (resultado * percent12 * this.convertToNumber(this.table.debito.outros) - this.convertToNumber(this.taxaCusto.debito.outros.valor));
      return acc + valor;
    }, 0);
    
    return soma;
  }
}

