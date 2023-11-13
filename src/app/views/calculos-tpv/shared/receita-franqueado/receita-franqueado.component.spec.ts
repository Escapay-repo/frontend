import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaFranqueadoComponent } from './receita-franqueado.component';

describe('ReceitaFranqueadoComponent', () => {
  let component: ReceitaFranqueadoComponent;
  let fixture: ComponentFixture<ReceitaFranqueadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceitaFranqueadoComponent]
    });
    fixture = TestBed.createComponent(ReceitaFranqueadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
