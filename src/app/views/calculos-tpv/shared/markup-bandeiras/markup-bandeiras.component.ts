import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabelaService } from 'src/app/components/tabela/tabela-create/tabela.service';
import { tabelaCrud } from 'src/app/components/tabela/tabelaCrud';
import { tabelaTaxaCusto } from 'src/app/components/tabela/tabelaTaxaCusto';

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
      });
    }
  }

  convertToNumber(value: any): number {
    return !isNaN(value) ? Number(value) : 0;
  }
}

