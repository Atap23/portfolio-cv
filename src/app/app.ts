import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { Profile } from './profile/profile';
import { Stack } from './stack/stack';
import { Timeline } from './timeline/timeline';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';
import { Skills } from './skills/skills';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Hero,
    Profile,
    Stack,
    Timeline,
    Projects,
    Contact,
    Footer,
    Skills
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
