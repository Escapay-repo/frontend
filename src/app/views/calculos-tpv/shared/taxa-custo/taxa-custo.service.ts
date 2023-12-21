import { maquininhaCrud } from './../../../../components/tabela/maquininhaCrud';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaxaCustoService {
  private taxaCusto = new BehaviorSubject<maquininhaCrud | null>(null)
  tabelaDados$ = this.taxaCusto.asObservable();

  atualizarTabelaDados(dados: maquininhaCrud) {
    this.taxaCusto.next(dados);
  }
}
