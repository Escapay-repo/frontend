import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquininhaHomeComponent } from './maquininha-home.component';

describe('MaquininhaHomeComponent', () => {
  let component: MaquininhaHomeComponent;
  let fixture: ComponentFixture<MaquininhaHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaquininhaHomeComponent]
    });
    fixture = TestBed.createComponent(MaquininhaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
