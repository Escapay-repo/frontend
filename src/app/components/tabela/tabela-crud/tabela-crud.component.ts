import { Component } from '@angular/core';



export interface TabelaDePagamento {
  formaDePagamento: string;
  masterCard: string;
  visa: string;
  demais: string;
}

const ELEMENT_DATA: TabelaDePagamento[] = [
  { formaDePagamento: 'Débito', masterCard: '', visa: '', demais: '' },
  { formaDePagamento: 'Crédito', masterCard: '', visa: '', demais: '' },
  { formaDePagamento: '2x', masterCard: '', visa: '', demais: '' },
  { formaDePagamento: '3x', masterCard: '', visa: '', demais: '' },
  { formaDePagamento: '4x', masterCard: '', visa: '', demais: '' },
  { formaDePagamento: '5x', masterCard: '', visa: '', demais: '' },
  { formaDePagamento: '6x', masterCard: '', visa: '', demais: '' },
  { formaDePagamento: '7x', masterCard: '', visa: '', demais: '' },
  { formaDePagamento: '8x', masterCard: '', visa: '', demais: '' },
  { formaDePagamento: '9x', masterCard: '', visa: '', demais: '' },
  { formaDePagamento: '10x', masterCard: '', visa: '', demais: '' },
  { formaDePagamento: '11x', masterCard: '', visa: '', demais: '' },
  { formaDePagamento: '12x', masterCard: '', visa: '', demais: '' },
  { formaDePagamento: '13x', masterCard: '', visa: '', demais: '' },
  { formaDePagamento: '14x', masterCard: '', visa: '', demais: '' },
  { formaDePagamento: '15x', masterCard: '', visa: '', demais: '' },
  { formaDePagamento: '16x', masterCard: '', visa: '', demais: '' },
  { formaDePagamento: '17x', masterCard: '', visa: '', demais: '' },
  { formaDePagamento: '18x', masterCard: '', visa: '', demais: '' },
  { formaDePagamento: '19x', masterCard: '', visa: '', demais: '' },
  { formaDePagamento: '20x', masterCard: '', visa: '', demais: '' },
  { formaDePagamento: '21x', masterCard: '', visa: '', demais: '' },
];

@Component({
  selector: 'escapay-tabela-crud',
  templateUrl: './tabela-crud.component.html',
  styleUrls: ['./tabela-crud.component.css']
})
export class TabelaCrudComponent {
  displayedColumns: string[] = ['formaDePagamento', 'masterCard', 'visa', 'demais'];
  dataSource = ELEMENT_DATA;

  userEnteredData: TabelaDePagamento[] = [];

  onInputChanged(element: TabelaDePagamento) {

    if (!this.userEnteredData.find(data => data.formaDePagamento === element.formaDePagamento)) {
      this.userEnteredData.push({ ...element });
    } else {
      const index = this.userEnteredData.findIndex(data => data.formaDePagamento === element.formaDePagamento);
      this.userEnteredData[index] = { ...element };
    }
  }
}

