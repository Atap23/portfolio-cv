import { Component, input } from '@angular/core';
import { TimelineRangeItem } from './timeline-range.types';

@Component({
  selector: 'app-timeline-range',
  imports: [],
  templateUrl: './timeline-range.html',
  styleUrl: './timeline-range.scss',
})
export class TimelineRange {

  timelineRangeItem = input.required<TimelineRangeItem>();
}
