import { Component, signal } from '@angular/core';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [
    Header
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio-cv');

  codePreview = signal(`export const architecture = {
    framework: 'Angular',
    language: 'TypeScript',
    patterns: ['Signals', 'RxJS', 'Modular Design'],
    focus: ['Scale', 'DX', 'Performance']
  };`);
}
