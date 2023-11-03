import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaReadComponent } from './tabela-read.component';

describe('TabelaReadComponent', () => {
  let component: TabelaReadComponent;
  let fixture: ComponentFixture<TabelaReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaReadComponent]
    });
    fixture = TestBed.createComponent(TabelaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
