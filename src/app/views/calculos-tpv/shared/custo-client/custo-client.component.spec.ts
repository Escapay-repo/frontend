import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustoClientComponent } from './custo-client.component';

describe('CustoClientComponent', () => {
  let component: CustoClientComponent;
  let fixture: ComponentFixture<CustoClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustoClientComponent]
    });
    fixture = TestBed.createComponent(CustoClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
