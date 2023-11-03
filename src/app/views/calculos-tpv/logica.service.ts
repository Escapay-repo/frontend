import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogicaService {
  private resultadoSubject: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  resultado$: Observable<number[]> = this.resultadoSubject.asObservable();

  constructor() { }

  // setResultado(resultado: number[]) {
  //   this.resultadoSubject.next(resultado);
  // }
}