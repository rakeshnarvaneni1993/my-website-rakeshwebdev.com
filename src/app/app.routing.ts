/**
 * Created by Rakesh on 11/28/2017.
 */
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {AboutMeComponent} from "./components/about-me/about-me.component";
import {ContactComponent} from "./components/contact/contact.component";
import {WorkExperienceComponent} from "./components/work-experience/work-experience.component";

// import { FrontPageComponent } from './components/front-page/front-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component : HomePageComponent},
  { path: 'projects', component : ProjectsComponent},
  { path: 'about', component : AboutMeComponent},
  { path: 'contact', component : ContactComponent},
  { path: 'work experience', component: WorkExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
