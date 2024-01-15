import { TestBed } from '@angular/core/testing';

import { ReceitaserviceService } from './receitaservice.service';

describe('ReceitaserviceService', () => {
  let service: ReceitaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceitaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
