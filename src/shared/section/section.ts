import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section',
  imports: [],
  templateUrl: './section.html',
  styleUrl: './section.scss',
})
export class Section {

  title = input<string>();
  subtitle = input<string>();
}
