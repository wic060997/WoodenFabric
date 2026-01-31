import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectCardComponent} from '../../components/project-card.component/project-card.component';

interface Project {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  imports: [CommonModule, ProjectCardComponent]
})
export class ProjectsComponent {
  projects: Project[] = [
    { title: 'Project One', description: 'Minimalist web design', image: 'https://via.placeholder.com/400x300' },
    { title: 'Project Two', description: 'Modern UI concept', image: 'https://via.placeholder.com/400x300' },
    { title: 'Project Three', description: 'Clean interface', image: 'https://via.placeholder.com/400x300' },
  ];
}
