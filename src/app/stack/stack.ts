import { Component } from '@angular/core';
import { Section } from '../../shared/section/section';
import { Tool } from './tool/tool';
import { ToolItem } from './tool/tool.types';

@Component({
  selector: 'app-stack',
  imports: [
    Section,
    Tool
  ],
  templateUrl: './stack.html',
  styleUrl: './stack.scss',
})
export class Stack {

  tools: ToolItem[] = [
    { name: 'Angular', description: 'AngularJS → v18, Material, PWA', level: 'EXPERT · 10Y' },
    { name: 'TypeScript / JS', description: 'Strict typing, modern ES', level: 'EXPERT' },
    { name: 'HTML · CSS · SASS', description: 'Responsive, accessible UIs', level: 'EXPERT' },
    { name: 'Animation', description: 'GSAP · CSS animations', level: 'EXPERT' },
    { name: 'Node.js / Express', description: 'Sequelize, REST APIs', level: 'ADVANCED' },
    { name: 'Databases', description: 'PostgreSQL · MySQL', level: 'ADVANCED' },
    { name: 'Auth & Payments', description: 'OAuth · Redsys · CryptoJS', level: 'ADVANCED' },
    { name: 'Tooling & QA', description: 'Webpack · Cypress · Jasmine · ESLint', level: 'ADVANCED' },
  ];
}
