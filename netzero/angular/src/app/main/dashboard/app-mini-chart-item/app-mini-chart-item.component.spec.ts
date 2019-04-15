import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMiniChartItemComponent } from './app-mini-chart-item.component';

describe('AppMiniChartItemComponent', () => {
  let component: AppMiniChartItemComponent;
  let fixture: ComponentFixture<AppMiniChartItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMiniChartItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMiniChartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
