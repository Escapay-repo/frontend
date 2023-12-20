import { TestBed } from '@angular/core/testing';

import { MaquininhaService } from './maquininha.service';

describe('MaquininhaService', () => {
  let service: MaquininhaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaquininhaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
