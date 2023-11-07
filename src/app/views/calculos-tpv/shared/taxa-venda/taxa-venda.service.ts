import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tabelaCrud } from 'src/app/components/tabela/tabelaCrud';

@Injectable({
  providedIn: 'root'
})
export class TaxaVendaService {
  private taxaVendas = new BehaviorSubject<tabelaCrud | null>(null)
  tabelaDados$ = this.taxaVendas.asObservable();

  atualizarTabelaDados(dados: tabelaCrud) {
    this.taxaVendas.next(dados);
  }
}
