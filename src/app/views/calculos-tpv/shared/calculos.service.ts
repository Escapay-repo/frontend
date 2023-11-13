import { tabelaTaxaCusto } from './../../../components/tabela/tabelaTaxaCusto';
import { Injectable } from '@angular/core';
import { tabelaCrud } from 'src/app/components/tabela/tabelaCrud';

@Injectable({
  providedIn: 'root'
})
export class CalculosService {

  constructor() {}

  // calcularMarkupBandeiras(resultados: number[], table: tabelaCrud, taxaCusto: tabelaTaxaCusto): number[] {
  //   const percent50 = 0.5;
  //   const percent38 = 0.38;
  //   const percent12 = 0.12;

  //   const calculoMarkup = (index: number): number => {
  //     return (
  //       (resultados[index] * percent50 * this.convertToNumber(table.debito.masterCard) - this.convertToNumber(taxaCusto.debito.masterCard.valor)) +
  //       (resultados[index] * percent38 * this.convertToNumber(table.debito.visa) - this.convertToNumber(taxaCusto.debito.visa.valor)) +
  //       (resultados[index] * percent12 * this.convertToNumber(table.debito.outros) - this.convertToNumber(taxaCusto.debito.outros.valor))
  //     ) / 100;
  //   };

  //   const markupBandeiras: number[] = [];

  //   for (let i = 0; i < resultados.length; i++) {
  //     markupBandeiras.push(calculoMarkup(i));
  //   }

  //   return markupBandeiras;
  // }

  // private convertToNumber(value: any): number {
  //   return !isNaN(value) ? Number(value) : 0;
  // }
}