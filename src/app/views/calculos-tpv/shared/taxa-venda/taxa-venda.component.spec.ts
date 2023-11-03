import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxaVendaComponent } from './taxa-venda.component';

describe('TaxaVendaComponent', () => {
  let component: TaxaVendaComponent;
  let fixture: ComponentFixture<TaxaVendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxaVendaComponent]
    });
    fixture = TestBed.createComponent(TaxaVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
