import { Component, input } from '@angular/core';
import { ToolItem } from './tool.types';


@Component({
  selector: 'app-tool',
  imports: [],
  templateUrl: './tool.html',
  styleUrl: './tool.scss',
})
export class Tool {
  item = input.required<ToolItem>();
}
