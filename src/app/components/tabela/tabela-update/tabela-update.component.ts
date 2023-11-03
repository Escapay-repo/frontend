import { Component, OnInit } from '@angular/core';
import { tabelaCrud } from '../tabelaCrud';
import { TabelaService } from '../tabela-create/tabela.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'escapay-tabela-update',
  templateUrl: './tabela-update.component.html',
  styleUrls: ['./tabela-update.component.css']
})
export class TabelaUpdateComponent implements OnInit {
  table!: tabelaCrud

  constructor(private tabelaService: TabelaService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.tabelaService.readById(id!).subscribe(table => {
      this.table = table
    });

  }

  updateTable(): void {
    this.tabelaService.update(this.table).subscribe(() =>
      this.tabelaService.showMessage('Produto alterado'))
    this.router.navigate([''])

  }

  cancel(): void {
    this.router.navigate([''])
  }

}
