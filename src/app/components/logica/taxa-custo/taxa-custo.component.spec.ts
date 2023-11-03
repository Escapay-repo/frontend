import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxaCustoComponent } from './taxa-custo.component';

describe('TaxaCustoComponent', () => {
  let component: TaxaCustoComponent;
  let fixture: ComponentFixture<TaxaCustoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxaCustoComponent]
    });
    fixture = TestBed.createComponent(TaxaCustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
