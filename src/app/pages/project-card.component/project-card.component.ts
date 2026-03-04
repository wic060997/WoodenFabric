import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Project} from '../../core/models/project.interface';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../core/serives/project.service';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent implements OnInit {
  @Input() id!: string;
  project$?: Observable<Project | undefined>;

  constructor(
    private projectService: ProjectService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    if (this.id) {
      this.project$ = this.projectService.getProjectById(this.id);
    }
  }
}
