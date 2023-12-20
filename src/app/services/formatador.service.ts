import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatadorService {

  formatarNumero(input: number): string {
    let numeros = input.toString().
      replace(/[^\d]/g, '');
    if (numeros.length > 2) {
      numeros = numeros.substring(0, 2) + '.' + numeros.substring(2, 4);
    }

    return numeros;
  }

  formatarVirgula(input: number): string {
    let numeros = input.toString().
      replace(/[^\d]/g, '');
    if (numeros.length > 2) {
      numeros = numeros.substring(0, 2) + '.' + numeros.substring(2, 4);
    }

    return numeros;
  }

  copiarNumero(input: string): string {
    return input.replace(/[^\d]/g, '');
  }
}