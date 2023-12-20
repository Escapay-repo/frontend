import { Component, OnInit } from '@angular/core';
import { maquininhaCrud } from '../../tabela/maquininhaCrud';
import { MaquininhaService } from '../maquininha.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormatadorService } from 'src/app/services/formatador.service';

@Component({
  selector: 'escapay-maquininha-delete',
  templateUrl: './maquininha-delete.component.html',
  styleUrls: ['../../tabela/tabela-delete/tabela-delete.component.css']
})
export class MaquininhaDeleteComponent implements OnInit {
  table!: maquininhaCrud


  constructor(private maquininhaService: MaquininhaService, private router: Router,
    private route: ActivatedRoute,
    private formatadorService: FormatadorService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.maquininhaService.readById(id!).subscribe(table => {
      this.table = table
    })
  }

  formatarNumero(numeroDigitado: number): string {
    const numeroFormatado = this.formatadorService.formatarVirgula(numeroDigitado);
    return numeroFormatado;
  }

  formatarNumeroStringParaNumber(valor: string): number {
    const numero = parseFloat(valor);
    return isNaN(numero) ? 0 : numero;
  }


  deleteTable(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.maquininhaService.delete(id!).subscribe(() => {
      this.maquininhaService.showMessage('Tabela excluida')
      this.router.navigate(['/maquininhaHome'])
    })

  }

  cancel(): void {
    this.router.navigate(['/maquininhaHome'])

  }


}
