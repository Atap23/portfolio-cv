import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineRange } from './timeline-range';

describe('TimelineRange', () => {
  let component: TimelineRange;
  let fixture: ComponentFixture<TimelineRange>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineRange]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineRange);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
