import { Component } from '@angular/core';

@Component({
  selector: 'escapay-taxa-custo',
  templateUrl: './taxa-custo.component.html',
  styleUrls: ['./taxa-custo.component.css']
})
export class TaxaCustoComponent {
  taxasCusto:  Array<{ master: number, visa: number, outros: number }> = [
    { master: 1.19, visa: 1.19, outros: 1.38 },
    { master: 3.60, visa: 3.60, outros: 4.07 },
    { master: 4.74, visa: 4.74, outros: 4.37 },
    { master: 5.53, visa: 5.53, outros: 6.08 },
    { master: 6.34, visa: 6.34, outros: 6.90 },
    { master: 7.15, visa: 7.15, outros: 7.73 },
    { master: 7.97, visa: 7.97, outros: 8.36 },
    { master: 9.09, visa: 9.09, outros: 9.69 },
    { master: 9.93, visa: 9.93, outros: 10.49 },
    { master: 10.77, visa: 10.77, outros: 11.02 },
    { master: 11.63, visa: 11.63, outros: 11.80 },
    { master: 12.49, visa: 12.49, outros: 12.61 },
    { master: 13.36, visa: 13.36, outros: 13.48 },
    { master: 0, visa: 0, outros: 0 },
    { master: 0, visa: 0, outros: 0 },
    { master: 0, visa: 0, outros: 0 },
    { master: 0, visa: 0, outros: 0 },
    { master: 0, visa: 0, outros: 0 },
    { master: 0, visa: 0, outros: 0 },
    { master: 0, visa: 0, outros: 0 },
    { master: 0, visa: 0, outros: 0 },
    { master: 0, visa: 0, outros: 0 },
  ]
}