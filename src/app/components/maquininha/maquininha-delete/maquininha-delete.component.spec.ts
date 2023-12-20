import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquininhaDeleteComponent } from './maquininha-delete.component';

describe('MaquininhaDeleteComponent', () => {
  let component: MaquininhaDeleteComponent;
  let fixture: ComponentFixture<MaquininhaDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaquininhaDeleteComponent]
    });
    fixture = TestBed.createComponent(MaquininhaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
