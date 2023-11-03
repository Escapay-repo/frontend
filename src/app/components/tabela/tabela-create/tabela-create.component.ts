import { Component, OnInit } from '@angular/core';
import { tabelaCrud } from '../tabelaCrud';
import { TabelaService } from './tabela.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'escapay-tabela-create',
  templateUrl: './tabela-create.component.html',
  styleUrls: ['./tabela-create.component.css']
})
export class TabelaCreateComponent implements OnInit {
  table: tabelaCrud = {
    tableName: '',
    debito:{
      masterCard:{valor: 0},
      visa:{valor: 0},
      outros: {valor: 0},
  },
    credito:{
      masterCard:{valor: 0},
      visa:{valor: 0},
      outros: {valor: 0},
  },
    duas: {
      masterCard:{valor: 0},
      visa:{valor: 0},
      outros: {valor: 0},
  },
    tres: {
      masterCard:{valor: 0},
      visa:{valor: 0},
      outros: {valor: 0},
  },
    quatro: {
      masterCard:{valor: 0},
      visa:{valor: 0},
      outros: {valor: 0},
  },
    cinco: {
      masterCard:{valor: 0},
      visa:{valor: 0},
      outros: {valor: 0},
  },
    seis: {
      masterCard:{valor: 0},
      visa:{valor: 0},
      outros: {valor: 0},
  },
    sete: {
      masterCard:{valor: 0},
      visa:{valor: 0},
      outros: {valor: 0},
  },
    oito: {
      masterCard:{valor: 0},
      visa:{valor: 0},
      outros: {valor: 0},
  },
    nove: {
      masterCard:{valor: 0},
      visa:{valor: 0},
      outros: {valor: 0},
  },
    dez: {
      masterCard:{valor: 0},
      visa:{valor: 0},
      outros: {valor: 0},
  },
    onze: {
      masterCard:{valor: 0},
      visa:{valor: 0},
      outros: {valor: 0},
  },
    doze: {
      masterCard:{valor: 0},
      visa:{valor: 0},
      outros: {valor: 0},
  },
    treze: {
      masterCard:{valor: 0},
      visa:{valor: 0},
      outros: {valor: 0},
  },
    quatorze: {
      masterCard:{valor: 0},
      visa:{valor: 0},
      outros: {valor: 0},
  },
    quinze: {
      masterCard:{valor: 0},
      visa:{valor: 0},
      outros: {valor: 0},
  },
    dezesseis: {
      masterCard:{valor: 0},
      visa:{valor: 0},
      outros: {valor: 0},
  },
    dezessete: {
      masterCard:{valor: 0},
      visa:{valor: 0},
      outros: {valor: 0},
  },
    dezoito: {
      masterCard:{valor: 0},
      visa:{valor: 0},
      outros: {valor: 0},
  },
    dezenove: {
      masterCard:{valor: 0},
      visa:{valor: 0},
      outros: {valor: 0},
  },
    vinte: {
      masterCard:{valor: 0},
      visa:{valor: 0},
      outros: {valor: 0},
  },
    vinteUm: {
      masterCard:{valor: 0},
      visa:{valor: 0},
      outros: {valor: 0},
  }
  }

  constructor
    (private router: Router,
      private tabelaService: TabelaService,
      private http: HttpClient
    ) { }

  ngOnInit(): void {

  }



  salvarTabela(): void {
    this.tabelaService.create(this.table).subscribe(() => {
      this.tabelaService.showMessage('Tabela Criada')
      this.router.navigate([""])
    })
  }

  cancel(): void {
    this.router.navigate([""])
  }
}