import { TestBed } from '@angular/core/testing';

import { FormatadorService } from './formatador.service';

describe('FormatadorService', () => {
  let service: FormatadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormatadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
