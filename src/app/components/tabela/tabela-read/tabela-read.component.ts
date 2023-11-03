import { Component, OnInit } from '@angular/core';
import { tabelaCrud } from '../tabelaCrud';
import { TabelaService } from '../tabela-create/tabela.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'escapay-tabela-read',
  templateUrl: './tabela-read.component.html',
  styleUrls: ['./tabela-read.component.css']
})
export class TabelaReadComponent implements OnInit {
  tables!: tabelaCrud[]
  displayedColumns = ['id', 'tableName', 'action']

  constructor(private tabelaService: TabelaService) { }

  ngOnInit(): void {
    this.tabelaService.read().subscribe(tables => {
      this.tables = tables
    })
    
  }

}