import { Component, OnInit } from '@angular/core';
import { maquininhaCrud } from '../../tabela/maquininhaCrud';
import { MaquininhaService } from '../maquininha.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormatadorService } from 'src/app/services/formatador.service';
import { IConfig, provideNgxMask } from 'ngx-mask';

export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;

@Component({
  selector: 'escapay-maquininha-update',
  templateUrl: './maquininha-update.component.html',
  styleUrls: ['../../tabela/tabela-update/tabela-update.component.css'],
  providers: [
    provideNgxMask()
  ]
})
export class MaquininhaUpdateComponent implements OnInit {
  table!: maquininhaCrud

  constructor(private maquininhaService: MaquininhaService, private router: Router,
    private route: ActivatedRoute,
    private formatadorService: FormatadorService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.maquininhaService.readById(id!).subscribe(data => {
      this.table = data
    });
  }

  formatarNumero(numeroDigitado: number): string {
    const numeroFormatado = this.formatadorService.formatarVirgula(numeroDigitado);
    return numeroFormatado;
  }

  formatarNumeroStringParaNumber(valor: string): number {
    const numero = parseFloat(valor);
    return isNaN(numero) ? 0 : numero;
  }

  updateTable(): void {
    this.maquininhaService.update(this.table.key, this.table).subscribe(() =>
      this.maquininhaService.showMessage('Tabela atualizada'))
    this.router.navigate(['/maquininhaHome'])
  }

  cancel(): void {
    this.router.navigate(['/maquininhaHome'])
  }

}
