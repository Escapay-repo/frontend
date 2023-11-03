import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaUpdateComponent } from './tabela-update.component';

describe('TabelaUpdateComponent', () => {
  let component: TabelaUpdateComponent;
  let fixture: ComponentFixture<TabelaUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaUpdateComponent]
    });
    fixture = TestBed.createComponent(TabelaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
