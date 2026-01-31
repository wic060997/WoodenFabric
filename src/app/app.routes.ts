import {RouterModule, Routes} from '@angular/router';
import {ProjectsComponent} from './pages/projects.component/projects.component';
import {HomeComponent} from './pages/home.component/home.component';
import {NgModule} from '@angular/core';
import {ConfiguratorComponent} from './components/configurator.component/configurator.component';
import {IndividualProjectComponent} from './pages/individual-project.component/individual-project.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path:'configurator',component: ConfiguratorComponent},
  {path:'individual', component: IndividualProjectComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
