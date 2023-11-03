import { TestBed } from '@angular/core/testing';

import { TaxaVendaService } from './taxa-venda.service';

describe('TaxaVendaService', () => {
  let service: TaxaVendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxaVendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
