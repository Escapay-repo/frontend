import { Component, Input, OnInit } from '@angular/core';
import { LogicaService } from '../../logica.service';

@Component({
  selector: 'escapay-share-bandeiras',
  templateUrl: './share-bandeiras.component.html',
  styleUrls: ['./share-bandeiras.component.css']
})
export class ShareBandeirasComponent implements OnInit {

  constructor(private logicaService: LogicaService) { }

  masterShare: number = 0;
  visaShare: number = 0;
  outrosShare: number = 0;
  @Input() resultados: Array<number> = [];

  ngOnInit() {
    this.logicaService.sharesUpdated.subscribe(() => {
      this.masterShare = this.logicaService.masterShare;
      this.visaShare = this.logicaService.visaShare;
      this.outrosShare = this.logicaService.outrosShare;
    });
  }
}