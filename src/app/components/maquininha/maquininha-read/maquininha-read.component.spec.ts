import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquininhaReadComponent } from './maquininha-read.component';

describe('MaquininhaReadComponent', () => {
  let component: MaquininhaReadComponent;
  let fixture: ComponentFixture<MaquininhaReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaquininhaReadComponent]
    });
    fixture = TestBed.createComponent(MaquininhaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
