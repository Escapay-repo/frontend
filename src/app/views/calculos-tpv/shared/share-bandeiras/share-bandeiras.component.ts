import { Component, Input } from '@angular/core';

@Component({
  selector: 'escapay-share-bandeiras',
  templateUrl: './share-bandeiras.component.html',
  styleUrls: ['./share-bandeiras.component.css']
})
export class ShareBandeirasComponent {
  @Input() percent50: number = 0;
  @Input() percent38: number = 0;
  @Input() percent12: number = 0;
  @Input() resultados: Array<number> = [];
}
