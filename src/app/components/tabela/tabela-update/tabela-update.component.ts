import { Component, OnInit } from '@angular/core';
import { tabelaCrud } from '../tabelaCrud';
import { TabelaService } from '../tabela-create/tabela.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormatadorService } from 'src/app/services/formatador.service';

@Component({
  selector: 'escapay-tabela-update',
  templateUrl: './tabela-update.component.html',
  styleUrls: ['./tabela-update.component.css']
})
export class TabelaUpdateComponent implements OnInit {
  table!: tabelaCrud

  constructor(private tabelaService: TabelaService, private router: Router,
    private route: ActivatedRoute,
    private formatadorService: FormatadorService
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.tabelaService.readById(id!).subscribe(data => {
      this.table = data
    });
  }

  formatarNumero(event: any): void {
    const numeroDigitado = event.target.value;
    const numeroFormatado = this.formatadorService.formatarNumero(numeroDigitado);
      event.target.value = numeroFormatado;
  }

  updateTable(): void {
    this.tabelaService.update(this.table.key, this.table).subscribe(() =>
      this.tabelaService.showMessage('Produto alterado'))
      console.log('frontend', this.table, this.table.key)
    this.router.navigate([''])
  }

  cancel(): void {
    this.router.navigate([''])
  }

}
