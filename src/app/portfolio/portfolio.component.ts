import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Projet } from '../_models/Projet';
import { ProjetsService } from '../_services/projets.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projets = {} as Projet[];

  constructor(private titleService: Title, private projetService: ProjetsService){
    this.titleService.setTitle('Audrey Cannesson - Portfolio');

  }
  ngOnInit(): void {
    this.projets = this.projetService.GetProject();
  }
}
