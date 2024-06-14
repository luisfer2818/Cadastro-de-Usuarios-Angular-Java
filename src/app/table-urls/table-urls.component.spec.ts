import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUrlsComponent } from './table-urls.component';

describe('TableUrlsComponent', () => {
  let component: TableUrlsComponent;
  let fixture: ComponentFixture<TableUrlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableUrlsComponent]
    });
    fixture = TestBed.createComponent(TableUrlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
