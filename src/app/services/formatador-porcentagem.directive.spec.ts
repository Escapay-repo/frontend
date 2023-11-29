import { FormatadorPorcentagemDirective } from './formatador-porcentagem.directive';
import { ElementRef } from '@angular/core';

describe('FormatadorPorcentagemDirective', () => {
  it('should create an instance', () => {
    const elMock: ElementRef = {} as ElementRef;
    const directive = new FormatadorPorcentagemDirective(elMock);
    expect(directive).toBeTruthy();
  });
});