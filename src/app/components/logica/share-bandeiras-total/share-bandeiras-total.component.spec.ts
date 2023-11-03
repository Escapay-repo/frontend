import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareBandeirasTotalComponent } from './share-bandeiras-total.component';

describe('ShareBandeirasTotalComponent', () => {
  let component: ShareBandeirasTotalComponent;
  let fixture: ComponentFixture<ShareBandeirasTotalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShareBandeirasTotalComponent]
    });
    fixture = TestBed.createComponent(ShareBandeirasTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
