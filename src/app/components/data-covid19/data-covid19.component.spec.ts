import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCovid19Component } from './data-covid19.component';

describe('DataCovid19Component', () => {
  let component: DataCovid19Component;
  let fixture: ComponentFixture<DataCovid19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataCovid19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCovid19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
