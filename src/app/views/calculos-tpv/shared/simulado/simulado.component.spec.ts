import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuladoComponent } from './simulado.component';

describe('SimuladoComponent', () => {
  let component: SimuladoComponent;
  let fixture: ComponentFixture<SimuladoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimuladoComponent]
    });
    fixture = TestBed.createComponent(SimuladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
