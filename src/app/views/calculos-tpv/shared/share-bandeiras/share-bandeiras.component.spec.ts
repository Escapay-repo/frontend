import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareBandeirasComponent } from './share-bandeiras.component';

describe('ShareBandeirasComponent', () => {
  let component: ShareBandeirasComponent;
  let fixture: ComponentFixture<ShareBandeirasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShareBandeirasComponent]
    });
    fixture = TestBed.createComponent(ShareBandeirasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
