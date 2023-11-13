import { Component, OnInit } from '@angular/core';
import { tabelaCrud } from 'src/app/components/tabela/tabelaCrud';
import { TabelaService } from 'src/app/components/tabela/tabela-create/tabela.service';
import { ActivatedRoute } from '@angular/router';
import { tabelaTaxaCusto } from 'src/app/components/tabela/tabelaTaxaCusto';

@Component({
  selector: 'escapay-markup',
  templateUrl: './markup.component.html',
  styleUrls: ['./markup.component.css']
})
export class MarkupComponent implements OnInit {
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