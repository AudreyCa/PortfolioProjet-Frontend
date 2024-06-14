import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjetsService } from '../_services/projets.service';
import { Projet } from '../_models/Projet';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  mesProjets = {} as Projet;


  constructor(private titleService: Title, private projetService: ProjetsService, private renderer: Renderer2){
    this.titleService.setTitle('Audrey Cannesson - Accueil');
  }

  ngOnInit(): void {
    this.mesProjets =  this.projetService.GetProjectById(0);
  }

  DownloadCV() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', "_blank");
    link.setAttribute('href', "../../assets/CV_DevWeb_AudreyCannesson.pdf");
    link.setAttribute('download', "CV_ConceptriceDeveloppeuseDApplications_AudreyCannesson.pdf"); // nom de mon CV
    link.click(); // download le temps d'etre récupérer
    link.remove(); // puis enlever de notre site jusqu'au prochain click
  }

}
