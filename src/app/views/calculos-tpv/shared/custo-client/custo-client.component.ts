import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabelaService } from 'src/app/components/tabela/tabela-create/tabela.service';
import { tabelaCrud } from 'src/app/components/tabela/tabelaCrud';

@Component({
  selector: 'escapay-custo-client',
  templateUrl: './custo-client.component.html',
  styleUrls: ['./custo-client.component.css']
})
export class CustoClientComponent implements OnInit {
  table!: tabelaCrud

  custoReais: (porcentagemTabela: number) => number = porcentagemTabela => 1000 / ((100 - this.convertToNumber(porcentagemTabela)) / 100);

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