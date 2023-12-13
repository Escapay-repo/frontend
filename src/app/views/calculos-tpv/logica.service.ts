import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogicaService {

  constructor() { }
  masterShare: number = 0;
  visaShare: number = 0;
  outrosShare: number = 0;

  sharesUpdated = new EventEmitter();

  getShares(): { masterShare: number; visaShare: number; outrosShare: number } {
    return {
      masterShare: this.masterShare,
      visaShare: this.visaShare,
      outrosShare: this.outrosShare,
    };
  }
}