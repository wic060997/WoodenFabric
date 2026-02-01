import {Injectable} from '@angular/core';
import {ProjectCategory} from '../enums/project-category';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from 'rxjs';
import {Project} from '../models/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  private jsonUrl = 'projects/projects.json';

  constructor(private http: HttpClient) {
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.jsonUrl);
  }

  getProjectById(id: string): Observable<Project | undefined> {
    return this.getProjects().pipe(
      map(projects => projects.find(p => p.id === id))
    );
  }

  getAllCategories(): ProjectCategory[] {
    return Object.values(ProjectCategory);
  }
}
