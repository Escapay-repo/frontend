import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TabelaService } from '../../tabela/tabela-create/tabela.service';

@Component({
  selector: 'escapay-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit{

  @Input() tabelaNames: string[] = [];

  constructor(private tabelaService: TabelaService, private router: Router) { }

  ngOnInit(): void {
    this.tabelaService.read().subscribe(tabelas => {
      this.tabelaNames = tabelas.map(tabela => tabela.tableName);
    });
  }

  goToTpv(tabelaName: string) {
    this.router.navigate([`/tpv/${tabelaName}`]);
  }
}