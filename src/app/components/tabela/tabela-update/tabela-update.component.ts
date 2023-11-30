import { Component, OnInit } from '@angular/core';
import { tabelaCrud } from '../tabelaCrud';
import { TabelaService } from '../tabela-create/tabela.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormatadorService } from 'src/app/services/formatador.service';
import { IConfig, provideNgxMask } from 'ngx-mask';

export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;

@Component({
  selector: 'escapay-tabela-update',
  templateUrl: './tabela-update.component.html',
  styleUrls: ['./tabela-update.component.css'],
  providers:[
    provideNgxMask()
  ]
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

  formatarNumero(numeroDigitado: number): string{
    const numeroFormatado = this.formatadorService.formatarVirgula(numeroDigitado);
    return numeroFormatado;
  }

  formatarNumeroStringParaNumber(valor: string): number {
    const numero = parseFloat(valor);
    return isNaN(numero) ? 0 : numero;
  }

  updateTable(): void {
    this.tabelaService.update(this.table.key, this.table).subscribe(() =>
      this.tabelaService.showMessage('Tabela atualizada'))
    this.router.navigate([''])
  }

  cancel(): void {
    this.router.navigate([''])
  }

}
