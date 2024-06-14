import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncurtarUrlComponent } from './encurtar-url.component';

describe('EncurtarUrlComponent', () => {
  let component: EncurtarUrlComponent;
  let fixture: ComponentFixture<EncurtarUrlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncurtarUrlComponent]
    });
    fixture = TestBed.createComponent(EncurtarUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
