import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMaquininhaComponent } from './create-maquininha.component';

describe('CreateMaquininhaComponent', () => {
  let component: CreateMaquininhaComponent;
  let fixture: ComponentFixture<CreateMaquininhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateMaquininhaComponent]
    });
    fixture = TestBed.createComponent(CreateMaquininhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
