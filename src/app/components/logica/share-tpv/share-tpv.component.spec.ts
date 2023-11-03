import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareTpvComponent } from './share-tpv.component';

describe('ShareTpvComponent', () => {
  let component: ShareTpvComponent;
  let fixture: ComponentFixture<ShareTpvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShareTpvComponent]
    });
    fixture = TestBed.createComponent(ShareTpvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
