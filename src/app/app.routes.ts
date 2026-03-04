import {RouterModule, Routes} from '@angular/router';
import {ProjectsComponent} from './pages/projects.component/projects.component';
import {HomeComponent} from './pages/home.component/home.component';
import {NgModule} from '@angular/core';
import {ConfiguratorComponent} from './components/configurator.component/configurator.component';
import {IndividualProjectComponent} from './pages/individual-project.component/individual-project.component';
import {RealizationsComponent} from './pages/realizations.component/realizations.component';
import {ProjectCardComponent} from './pages/project-card.component/project-card.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path:'configurator',component: ConfiguratorComponent},
  {path:'individual', component: IndividualProjectComponent},
  {path:'realizations', component: RealizationsComponent},
  {path:'projects/:id', component: ProjectCardComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
