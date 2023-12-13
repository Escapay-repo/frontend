import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabelaService } from 'src/app/components/tabela/tabela-create/tabela.service';
import { tabelaCrud } from 'src/app/components/tabela/tabelaCrud';
import { tabelaTaxaCusto } from 'src/app/components/tabela/tabelaTaxaCusto';
import { LogicaService } from '../../logica.service';

@Component({
  selector: 'escapay-markup-bandeiras',
  templateUrl: './markup-bandeiras.component.html',
  styleUrls: ['./markup-bandeiras.component.css']
})
export class MarkupBandeirasComponent implements OnInit {
  @Input() resultados: Array<number> = [];
  taxaCusto = tabelaTaxaCusto;
  table!: tabelaCrud

  constructor(private tabelaService: TabelaService,
    private route: ActivatedRoute,
    private logicaService: LogicaService
  ) { }

  masterShare: number = 0;
  visaShare: number = 0;
  outrosShare: number = 0;

  ngOnInit(): void {
    this.logicaService.sharesUpdated.subscribe(() => {
      this.masterShare = this.logicaService.masterShare;
      this.visaShare = this.logicaService.visaShare;
      this.outrosShare = this.logicaService.outrosShare;
    });
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

