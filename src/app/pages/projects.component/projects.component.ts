import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ProjectService} from '../../core/serives/project.service';
import {ProjectCategory} from '../../core/enums/project-category';
import {Project} from '../../core/models/project.interface';
import {RouterLink} from '@angular/router';
import {ProjectCardComponent} from '../project-card.component/project-card.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  imports: [CommonModule, RouterLink, NgOptimizedImage]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  categories: ProjectCategory[] = [];
  activeCategory?: ProjectCategory;

  constructor(private projectService: ProjectService,private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.categories = this.projectService.getAllCategories();

    if (this.categories.length > 0) {
      this.activeCategory = this.categories[0];
    }

    this.projectService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;

        this.cdr.detectChanges();

        setTimeout(() => {
          this.scrollToCategory(this.activeCategory!);
        }, 50);
      },
      error: (err) => console.error('Błąd podczas ładowania projektów:', err)
    });
  }

  getProjectsByCategory(category: ProjectCategory): Project[] {
    return this.projects.filter(p => p.category === category);
  }

  scrollToCategory(category: ProjectCategory): void {
    this.activeCategory = category;
    const element = document.getElementById(category);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  moveSlider(projectId: string, direction: 'left' | 'right', totalImages: number): void {
    const slider = document.getElementById('slider-' + projectId);

    if (slider) {
      const scrollAmount = slider.clientWidth;
      const currentScroll = Math.round(slider.scrollLeft);
      const maxScroll = Math.round(slider.scrollWidth - scrollAmount);

      let newScroll: number;

      if (direction === 'right') {
        if (currentScroll >= maxScroll - 5) {
          newScroll = 0;
        } else {
          newScroll = currentScroll + scrollAmount;
        }
      } else {
        if (currentScroll <= 5) {
          newScroll = maxScroll;
        } else {
          newScroll = currentScroll - scrollAmount;
        }
      }

      slider.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  }
}
