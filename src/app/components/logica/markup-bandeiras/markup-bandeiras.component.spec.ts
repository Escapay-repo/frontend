import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkupBandeirasComponent } from './markup-bandeiras.component';

describe('MarkupBandeirasComponent', () => {
  let component: MarkupBandeirasComponent;
  let fixture: ComponentFixture<MarkupBandeirasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarkupBandeirasComponent]
    });
    fixture = TestBed.createComponent(MarkupBandeirasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
