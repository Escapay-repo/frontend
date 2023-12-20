import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquininhaCreateComponent } from './maquininha-create.component';

describe('MaquininhaCreateComponent', () => {
  let component: MaquininhaCreateComponent;
  let fixture: ComponentFixture<MaquininhaCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaquininhaCreateComponent]
    });
    fixture = TestBed.createComponent(MaquininhaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
