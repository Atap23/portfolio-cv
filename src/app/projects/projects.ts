import { Component } from '@angular/core';
import { Section } from '../../shared/section/section';
import { ProjectItem } from './project/project.types';
import { Project } from './project/project';

@Component({
  selector: 'app-projects',
  imports: [
    Section,
    Project
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  projectItems: ProjectItem[] = [
    {
      name: 'Educational Management Platform',
      description: 'Multi-role platform for La Casita de Inglés: parents, teachers, admins and center managers, with enrollments, camps and integrated Redsys payments.',
      keywords: ['Angular', 'Node.js', 'Express', 'Sequelize', 'PostgreSQL']
    },
    {
      name: 'AI Personal Assistant (PWA)',
      description: 'Web-based AI assistant for Tailor — offline-capable PWA wired to AI backend services with a focus on usability and performance.',
      keywords: ['Angular', 'PWA', 'Webpack', 'AI APIs']
    },
    {
      name: 'Stratio Platform Integrations',
      description: 'Frontend integrations of the Stratio platform across GP Bullhound, El Corte Inglés, Sanitas, HSBC, REE, Banco Santander and Mahou.',
      keywords: ['Angular', 'TypeScript', 'Enterprise']
    },
    {
      name: 'Banking Platforms · Santander',
      description: 'Pre-approved business loans platform and Health Insurance Office for Banco Santander, delivered with CI/CD pipelines and unit-test coverage.',
      keywords: ['AngularJS', 'Jasmine', 'Jenkins', 'OpenShift']
    }
  ];

}
