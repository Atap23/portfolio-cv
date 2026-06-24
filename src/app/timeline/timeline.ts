import { Component } from '@angular/core';
import { Section } from '../../shared/section/section';
import { TimelineRangeItem } from './timeline-range/timeline-range.types';
import { TimelineRange } from './timeline-range/timeline-range';

@Component({
  selector: 'app-timeline',
  imports: [
    Section,
    TimelineRange
  ],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
})
export class Timeline {

  timelineRangeItems: TimelineRangeItem[] = [
    {
      role: 'Frontend Architect / Senior Frontend Developer',
      company: 'La Casita de Inglés',
      location: 'Sevilla',
      period: '2025 — Now',
      details: [
        'Architect of a multi-role educational platform: scalability, maintainability, code quality.',
        'End-to-end development across frontend and backend (Node.js, Express, Sequelize).',
        'Complex parent flows: registration, child management, enrollments, camps and online payments.',
        'Role-based access for parents, teachers, administrators and center managers.',
        'Admin tools, dashboards and metrics for operational and business monitoring.',
      ],
    },
    {
      role: 'Senior Frontend Developer',
      company: 'Tailor',
      location: 'Sevilla',
      period: '2024 — 2025',
      details: [
        'Senior frontend on an AI-powered personal assistant as the startup\'s core product.',
        'Designed user-facing features focused on usability, performance and scalability.',
        'Shipped Progressive Web App (PWA) features for cross-device experience.',
        'Integrated frontend with AI-driven backend services; tuned Webpack build pipeline.',
      ],
    },
    {
      role: 'Senior Frontend Developer',
      company: 'StratioBD',
      location: 'Madrid',
      period: '2019 — 2024',
      details: [
        'Delivered frontend solutions for GP Bullhound, El Corte Inglés, Sanitas, HSBC, REE, Banco Santander and Mahou.',
        'Integrated the Stratio platform into diverse client environments.',
        'Internal Governance product team: maintenance and new feature development.',
        'Drove scalable, maintainable frontend architectures across multidisciplinary teams.',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'VASS',
      location: 'Madrid',
      period: '2017 — 2019',
      details: [
        'AngularJS components and services with Jasmine unit tests.',
        'UIs with HTML5, CSS3, LESS and Bootstrap; CI/CD with Jenkins and OpenShift.',
        'Pre-approved loans platform and Health Insurance Office for Banco Santander; Telco project for Telefónica.',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Everis',
      location: 'Sevilla',
      period: '2015 — 2017',
      details: [
        'AngularJS, Node.js, Gulp, Bower; Git and Jenkins integration.',
        'Material Design UIs with HTML5 and SASS; Agile Scrum delivery.',
        'Testing with Selenium and Protractor.',
      ],
    },
  ];

}
