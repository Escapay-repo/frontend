import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustoClienteComponent } from './custo-cliente.component';

describe('CustoClienteComponent', () => {
  let component: CustoClienteComponent;
  let fixture: ComponentFixture<CustoClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustoClienteComponent]
    });
    fixture = TestBed.createComponent(CustoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
