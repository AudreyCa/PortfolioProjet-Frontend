import { Component, OnInit } from '@angular/core';
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


  constructor(private titleService: Title, private projetService: ProjetsService){
    this.titleService.setTitle('Audrey Cannesson - Accueil');
  }

  ngOnInit(): void {
    this.mesProjets =  this.projetService.GetProjectById(0);
  }

}
