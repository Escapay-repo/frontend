import { Component, Input } from '@angular/core';

@Component({
  selector: 'escapay-share-bandeiras',
  templateUrl: './share-bandeiras.component.html',
  styleUrls: ['./share-bandeiras.component.css']
})
export class ShareBandeirasComponent {
  @Input() percent50: number = 50;
  @Input() percent38: number = 38;
  @Input() percent12: number = 12;
  @Input() resultados: Array<number> = [];

}