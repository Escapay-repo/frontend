import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquininhaUpdateComponent } from './maquininha-update.component';

describe('MaquininhaUpdateComponent', () => {
  let component: MaquininhaUpdateComponent;
  let fixture: ComponentFixture<MaquininhaUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaquininhaUpdateComponent]
    });
    fixture = TestBed.createComponent(MaquininhaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
