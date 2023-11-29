import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TabelaService } from 'src/app/components/tabela/tabela-create/tabela.service';
import { tabelaCrud } from 'src/app/components/tabela/tabelaCrud';
import { TaxaVendaService } from './taxa-venda.service';
import { FormatadorService } from 'src/app/services/formatador.service';

@Component({
  selector: 'escapay-taxa-venda',
  templateUrl: './taxa-venda.component.html',
  styleUrls: ['./taxa-venda.component.css']
})
export class TaxaVendaComponent implements OnInit {
  table!: tabelaCrud
  tabelaDados: { master: number, visa: number, outros: number }[] = [];

  constructor(private tabelaService: TabelaService,
    private route: ActivatedRoute,
    private taxaVendaCompartilhada: TaxaVendaService,
    private formatadorService: FormatadorService
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

    if (id) {
      this.tabelaService.readById(id).subscribe(table => {
        this.table = table;
        this.taxaVendaCompartilhada.atualizarTabelaDados(table);
      });
    }
  } 

  formatarNumero(numeroDigitado: number): string{
    const numeroFormatado = this.formatadorService.formatarVirgula(numeroDigitado);
    return numeroFormatado;
  }
}
