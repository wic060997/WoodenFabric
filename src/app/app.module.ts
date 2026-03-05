import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app.routes';

import {App} from './app';
import {HeaderComponent} from './shared/components/header.component/header.component';
import {FooterComponent} from './shared/components/footer.component/footer.component';
import {HomeComponent} from './pages/home.component/home.component';
import {ProjectsComponent} from './pages/projects.component/projects.component';
import {ProjectCardComponent} from './pages/project-card.component/project-card.component';
import {IndividualProjectComponent} from './pages/individual-project.component/individual-project.component';
import {RealizationsComponent} from './pages/realizations.component/realizations.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    App,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    RealizationsComponent,
    ProjectCardComponent
  ],
  declarations: [
    IndividualProjectComponent
  ],
  bootstrap: [App]
})
export class AppModule {
}
