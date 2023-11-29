import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[escapayFormatadorPorcentagem]'
})
export class FormatadorPorcentagemDirective {
  
  constructor(private el: ElementRef) { }

//   @HostListener('blur', ['$event']) onBlur(event: FocusEvent) {
//     let valor = (event.target as HTMLInputElement).value;
//     let int = valor.replace(/[^0-9]/g, '');

//     if (int.length === 3) {
//       // Adiciona zero ao final e ponto antes do último dígito
//    this.atualizarValor(`${int.slice(0, 2)}.${int.slice(2)}0`, event);
//     } else if (int.length === 2) {
//       // Adiciona ponto antes do último dígito se houver apenas dois dígitos
//       this.atualizarValor(`${int.slice(0, 1)}.${int.slice(1)}`, event);
//     }
//   }

//   @HostListener('input', ['$event']) onInput(event: InputEvent) {
//     let valor = (event.target as HTMLInputElement).value;
//     let int = valor.replace(/[^0-9]/g, '');

//     if (int.length >= 3 && int.length <= 4) {
//       this.atualizarValor(`${int.slice(0, 2)}.${int.slice(2)}`, event, 4);
//     } else if (int.length >= 5 && int.length <= 6) {
//       let whole = int.slice(0, 2);
//       let fraction = int.slice(2, 4);
//       this.atualizarValor(`${whole}.${fraction}`, event);
//     } else {
//       this.atualizarValor(`${int}`, event, valor.length);
//     }
//   }

//   private atualizarValor(novoValor: string, event: FocusEvent | InputEvent, cursorPos: number | null = null): void {
//     (event.target as HTMLInputElement).value = novoValor;
  
//     if (cursorPos !== null) {
//       (event.target as HTMLInputElement).setSelectionRange(cursorPos, cursorPos);
//     }
//   }
// }

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

//   @HostListener('input', ['$event']) onInput(event: any) {
//     let valor = event.target.value;
//     let int = valor.slice(0, valor.length - 1);

//     if (int.includes('%')) {
//       this.atualizarValor('%', event);
//     } else if (int.length >= 3 && int.length <= 4 && !int.includes('.')) {
//       this.atualizarValor(`${int.slice(0, 2)}.${int.slice(2, 3)}%`, event, 4);
//     } else if (int.length >= 5 && int.length <= 6) {
//       let whole = int.slice(0, 2);
//       let fraction = int.slice(3, 5);
//       this.atualizarValor(`${whole}.${fraction}%`, event);
//     } else {
//       this.atualizarValor(`${int}%`, event, event.target.value.length - 1);
//     }
//   }

//   private atualizarValor(novoValor: string, event: any, cursorPos: number | null = null): void {
//     this.el.nativeElement.value = novoValor;
  
//     if (cursorPos !== null) {
//       event.target.setSelectionRange(cursorPos, cursorPos);
//     }
//   }
// }