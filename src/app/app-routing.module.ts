import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

const routes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path:'', component: AccueilComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'experiences', component: ExperiencesComponent},
  {path: 'contact', component: ContactComponent},
  {path:'', component: AccueilComponent},
  {path: '**', component: ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
