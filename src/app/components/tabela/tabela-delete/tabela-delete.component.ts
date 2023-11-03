import { Component, OnInit } from '@angular/core';
import { tabelaCrud } from '../tabelaCrud';
import { TabelaService } from '../tabela-create/tabela.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'escapay-tabela-delete',
  templateUrl: './tabela-delete.component.html',
  styleUrls: ['./tabela-delete.component.css']
})
export class TabelaDeleteComponent implements OnInit {
  table!: tabelaCrud


  constructor(private tabelaService: TabelaService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.tabelaService.readById(id!).subscribe(table => {
      this.table = table
    })
  }

  deleteTable(): void {
    this.tabelaService.delete(this.table.id!).subscribe(() => {
      this.tabelaService.showMessage('Tabela excluido')
      this.router.navigate([''])
    })

  }

  cancel(): void {
    this.router.navigate([''])

  }


}
