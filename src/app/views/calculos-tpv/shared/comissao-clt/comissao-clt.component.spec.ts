import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComissaoCltComponent } from './comissao-clt.component';

describe('ComissaoCltComponent', () => {
  let component: ComissaoCltComponent;
  let fixture: ComponentFixture<ComissaoCltComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComissaoCltComponent]
    });
    fixture = TestBed.createComponent(ComissaoCltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
