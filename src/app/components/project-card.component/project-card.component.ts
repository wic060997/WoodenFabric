import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../core/models/project.interface';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {ProjectService} from '../../core/serives/project.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  imports: [
    RouterLink,
    CommonModule
  ],
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent implements OnInit {
  project?: Project;
  recommendations: Project[] = [];

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.loadProject(params['id']);
    });
  }

  private loadProject(id: string) {
    this.projectService.getProjectById(id).subscribe(p => {
      this.project = p;
      if (p) {
        this.projectService.getProjects().subscribe(all => {
          this.recommendations = all.filter(item => item.id !== id).slice(0, 3);
        });
      }
    });
  }
}
