import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ContactComponent } from './contact/contact.component';
import { CardProjectComponent } from './card-project/card-project.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { CarouselModule} from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { NavIconComponent } from './nav-icon/nav-icon.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AccueilComponent,
    PortfolioComponent,
    ExperiencesComponent,
    ContactComponent,
    CardProjectComponent,
    ProjectModalComponent,
    NavIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(), //pour le filtre
    FormsModule, //pour le filtre
    AccordionModule.forRoot(), // pour la page des expériences
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
