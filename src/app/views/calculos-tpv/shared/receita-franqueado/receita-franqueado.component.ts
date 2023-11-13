import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MarkupBandeirasComponent } from '../markup-bandeiras/markup-bandeiras.component';

@Component({
  selector: 'escapay-receita-franqueado',
  templateUrl: './receita-franqueado.component.html',
  styleUrls: ['./receita-franqueado.component.css']
})
export class ReceitaFranqueadoComponent implements AfterViewInit  {

  @ViewChild(MarkupBandeirasComponent) markupBandeirasComponent!: MarkupBandeirasComponent;

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  calcularSoma(): number {
    return this.markupBandeirasComponent.calcularSoma();
  }
}