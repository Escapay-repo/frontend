import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculosTpvComponent } from './calculos-tpv.component';

describe('CalculosTpvComponent', () => {
  let component: CalculosTpvComponent;
  let fixture: ComponentFixture<CalculosTpvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculosTpvComponent]
    });
    fixture = TestBed.createComponent(CalculosTpvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
