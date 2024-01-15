import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceitaserviceService {

  constructor() { }

  private porcentagemImpostoSubject: BehaviorSubject<number> = new BehaviorSubject<number>(6);

  setPorcentagemImposto(valor: number): void {
    this.porcentagemImpostoSubject.next(valor);
  }

  getPorcentagemImposto(): Observable<number> {
    return this.porcentagemImpostoSubject.asObservable();
  }
}
