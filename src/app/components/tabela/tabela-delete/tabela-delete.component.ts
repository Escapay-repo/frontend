import { Component, OnInit } from '@angular/core';
import { tabelaCrud } from '../tabelaCrud';
import { TabelaService } from '../tabela-create/tabela.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormatadorService } from 'src/app/services/formatador.service';

@Component({
  selector: 'escapay-tabela-delete',
  templateUrl: './tabela-delete.component.html',
  styleUrls: ['./tabela-delete.component.css']
})
export class TabelaDeleteComponent implements OnInit {
  table!: tabelaCrud


  constructor(private tabelaService: TabelaService, private router: Router,
    private route: ActivatedRoute,
    private formatadorService: FormatadorService
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.tabelaService.readById(id!).subscribe(table => {
      this.table = table
    })
  }

  formatarNumero(event: any): void {
    const numeroDigitado = event.target.value;
    const numeroFormatado = this.formatadorService.formatarNumero(numeroDigitado);
      event.target.value = numeroFormatado;
  }

  deleteTable(): void {
    const id = this.route.snapshot.paramMap.get('id') 
    this.tabelaService.delete(id!).subscribe(() => {
      this.tabelaService.showMessage('Tabela excluido')
      this.router.navigate([''])
    })

  }

  cancel(): void {
    this.router.navigate([''])

  }


}
