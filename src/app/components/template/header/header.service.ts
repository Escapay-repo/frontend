import { Injectable } from '@angular/core';
import { HeaderData } from './header-data.model';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Início',
    icon: 'home',
    routeUrl:'',
    tableName: ''
  })

  constructor() { }

  get headerData(): HeaderData {
    return this._headerData.value
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData)
  }

  private _showMenuButton = new BehaviorSubject<boolean>(true);

get showMenuButton(): boolean {
  return this._showMenuButton.value;
}

set showMenuButton(value: boolean) {
  this._showMenuButton.next(value);
}
}
