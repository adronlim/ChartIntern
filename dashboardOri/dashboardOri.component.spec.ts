import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardOriComponent} from './dashboardOri.component';

describe('DashboardOriComponent', () => {
  let component: DashboardOriComponent;
  let fixture: ComponentFixture<DashboardOriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOriComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
