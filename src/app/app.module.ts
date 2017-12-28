import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import {AgmSnazzyInfoWindowModule} from "@agm/snazzy-info-window";


import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import {AppRoutingModule} from "./app.routing";
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpModule} from "@angular/http";
import {GithubService} from "./services/github.service";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PizzaComponent,
    HomePageComponent,
    ProjectsComponent,
    AboutMeComponent,
    ContactComponent,
    WorkExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAu8WN38SsCvopdVuuRGYXpRIrhzNVlK2Q'
    }),
    AgmSnazzyInfoWindowModule,
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
