import { Component, OnInit } from '@angular/core';
import { tabelaCrud } from '../tabelaCrud';
import { TabelaService } from '../tabela-create/tabela.service';

@Component({
  selector: 'escapay-tabela-read',
  templateUrl: './tabela-read.component.html',
  styleUrls: ['./tabela-read.component.css']
})
export class TabelaReadComponent implements OnInit {
  tables!: tabelaCrud[]
  displayedColumns = [ 'tableName', 'action']

  constructor(private tabelaService: TabelaService) { }

  ngOnInit(): void {
    this.tabelaService.read().subscribe(tables => {
      this.tables = tables
    })
    
  }
  onClickNavigateToDetails(rowId: string): void {
    const prefix = '/tabelaTpv';
    this.tabelaService.navigateToDetails(prefix, rowId);
  }

}