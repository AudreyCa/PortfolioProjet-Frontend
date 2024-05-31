import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Projet } from '../_models/Projet';
import { ProjetsService } from '../_services/projets.service';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projets = {} as Projet[];

  isCollapsed: boolean = true;
  filtering: boolean = false;

  // Les langages :
  typescript: boolean = false;
  javascript: boolean = false;
  csharp: boolean = false;
  // Les framework :
  expressjs: boolean = false;
  angular: boolean = false;
  react: boolean = false;

  constructor(private titleService: Title, private projetService: ProjetsService){
    this.titleService.setTitle('Audrey Cannesson - Portfolio');

  }
  ngOnInit(): void {
    this.projets = this.projetService.GetProjects();
  }

  Filter(){
    let filterTags: Tag[] = [];

    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.javascript){
      filterTags.push(Tag.JAVASCRIPT);
    }
    if(this.expressjs){
      filterTags.push(Tag.EXPRESSJS);
    }
    if(this.csharp){
      filterTags.push(Tag.CSHARP);
    }
    if(this.angular){
      filterTags.push(Tag.ANGULAR);
    }
    if(this.react){
      filterTags.push(Tag.REACT);
    }

    if(this.typescript || this.javascript || this.expressjs || this.csharp || this.angular || this.react) {
      this.filtering = true;
    } else{
      this.filtering = false;
    }

    this.projets = this.projetService.GetProjectByFilter(filterTags);
  } // pour le filtre de nos projet, on récupère la fonction qu'on a créée dans nos services

  ResetFilters(){
    this.typescript = false;
    this.javascript = false;
    this.expressjs = false;
    this.csharp = false;
    this.angular = false;
    this.react = false;
    this.filtering = false;

    this.projets = this.projetService.GetProjects();
  }
}
