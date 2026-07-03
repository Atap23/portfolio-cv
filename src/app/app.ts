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

  constructor() {
    window.addEventListener('DOMContentLoaded', () => {
      // Comprueba si la URL actual tiene un ancla (ej: #contact)
      if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
          // Espera un milisegundo a que el navegador procese el sitio e introduce el salto directo
          setTimeout(() => {
            target.scrollIntoView({ behavior: 'auto' }); // 'auto' es el salto instantáneo
          }, 10);
        }
      }
    });

  }
}
