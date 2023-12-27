import { Component, Input, OnInit } from '@angular/core';
import { IConfig, provideNgxMask } from 'ngx-mask';
import { LogicaService } from '../../logica.service';

export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;

@Component({
  selector: 'escapay-share-bandeiras-total',
  templateUrl: './share-bandeiras-total.component.html',
  styleUrls: ['./share-bandeiras-total.component.css'],
  providers: [
    provideNgxMask()
  ]
})
export class ShareBandeirasTotalComponent implements OnInit {

  constructor(private logicaService: LogicaService) { }

  @Input() bandeirasTotal: Array<any> = []

  ngOnInit(): void { }

  masterShare: number = 50;
  visaShare: number = 38;
  outrosShare: number = 12;

  validarPorcentagem() {
    let porcentagemTotal =
      this.masterShare +
      this.visaShare +
      this.outrosShare;
    if (porcentagemTotal > 100) {
      alert('A soma das porcentagens não pode ser superior a 100%.');
    } else {
      this.logicaService.masterShare = this.masterShare;
      this.logicaService.visaShare = this.visaShare;
      this.logicaService.outrosShare = this.outrosShare;
      this.logicaService.sharesUpdated.emit();
    }
  }
}
