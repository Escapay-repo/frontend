import { Component, OnInit } from '@angular/core';
import { tabelaCrud } from '../tabelaCrud';
import { TabelaService } from '../tabela-create/tabela.service';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'escapay-tabela-read',
  templateUrl: './tabela-read.component.html',
  styleUrls: ['./tabela-read.component.css']
})
export class TabelaReadComponent implements OnInit {
  tables!: tabelaCrud[]
  displayedColumns = ['tableName', 'action']
  isAdmin: boolean = false;

  constructor(private tabelaService: TabelaService,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.tabelaService.read().subscribe(tables => {
      this.tables = tables
    })
    this.loginService.isAdmin().subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    });
  }
  onClickNavigateToDetails(rowId: string): void {
    const prefix = '/tabelaTpv';
    this.tabelaService.navigateToDetails(prefix, rowId);
  }

}