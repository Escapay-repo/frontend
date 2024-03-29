import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[escapayFormatadorPorcentagem]'
})
export class FormatadorPorcentagemDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInput(event: any) {
    let valor = event.target.value;
    let int = valor.replace(/[^0-9]/g, '');

    if (int.length >= 3 && int.length <= 4 && !int.includes('.')) {
      this.atualizarValor(`${int.slice(0, 2)}.${int.slice(2)}`, event, 4);
    } else if (int.length >= 5 && int.length <= 6) {
      let whole = int.slice(0, 2);
      let fraction = int.slice(2, 4);
      this.atualizarValor(`${whole}.${fraction}`, event);
    } else {
      this.atualizarValor(`${int}`, event, event.target.value.length);
    }
  }

  private atualizarValor(novoValor: string, event: any, cursorPos: number | null = null): void {
    this.el.nativeElement.value = novoValor;

    if (cursorPos !== null) {
      event.target.setSelectionRange(cursorPos, cursorPos);
    }
  }
}