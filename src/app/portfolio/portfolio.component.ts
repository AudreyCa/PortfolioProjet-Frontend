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

  projets: Projet[] = [];

  isCollapsed: boolean = true;
  filtering: boolean = false;

  TypeScript: boolean = false;
  JavaScript: boolean = false;
  CSharp: boolean = false;
  Express: boolean = false;
  Angular: boolean = false;
  React: boolean = false;

  constructor(
    private titleService: Title,
    private projetService: ProjetsService){
    this.titleService.setTitle('Audrey Cannesson - Portfolio');

  }
  ngOnInit(): void {
    this.projets = this.projetService.GetProjects();
  }

  Filter() {
    let filterTags: string[] = [];

    if(this.TypeScript){
      filterTags.push('TypeScript');
    }
    if(this.JavaScript){
      filterTags.push('JavaScript');
    }
    if(this.Express){
      filterTags.push('Express');
    }
    if(this.CSharp){
      filterTags.push('CSharp');
    }
    if(this.Angular){
      filterTags.push('Angular');
    }
    if(this.React){
      filterTags.push('React');
    }

    if(this.TypeScript || this.JavaScript || this.Express || this.CSharp || this.Angular || this.React) {
      this.filtering = true;
    } else{
      this.filtering = false;
    }

    this.projets = this.projetService.GetProjectByFilter(filterTags);
  }


  ResetFilters(){
    this.TypeScript = false;
    this.JavaScript = false;
    this.Express = false;
    this.CSharp = false;
    this.Angular = false;
    this.React = false;
    this.filtering = false;

    this.projets = this.projetService.GetProjects();
  }
}
