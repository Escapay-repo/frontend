import { Component, Input, OnInit } from '@angular/core';
import { LogicaService } from '../../logica.service';

@Component({
  selector: 'escapay-share-bandeiras',
  templateUrl: './share-bandeiras.component.html',
  styleUrls: ['./share-bandeiras.component.css', '../../../../styles/bandeiras.css']
})
export class ShareBandeirasComponent implements OnInit {

  constructor(private logicaService: LogicaService) { }

  masterShare: number = 50;
  visaShare: number = 38;
  outrosShare: number = 12;
  @Input() resultados: Array<number> = [];

  ngOnInit() {
    this.logicaService.sharesUpdated.subscribe(() => {
      this.masterShare = this.logicaService.masterShare;
      this.visaShare = this.logicaService.visaShare;
      this.outrosShare = this.logicaService.outrosShare;
    });
  }
}