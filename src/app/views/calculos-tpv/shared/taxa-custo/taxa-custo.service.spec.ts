import { TestBed } from '@angular/core/testing';

import { TaxaCustoService } from './taxa-custo.service';

describe('TaxaCustoService', () => {
  let service: TaxaCustoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxaCustoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
