import { Component, input } from '@angular/core';
import { ProjectItem } from './project.types';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.scss',
})
export class Project {

  project = input.required<ProjectItem>();
}
