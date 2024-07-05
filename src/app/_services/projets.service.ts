import { Injectable } from '@angular/core';
import { Projet } from '../_models/Projet';
import projetsData from '../../assets/projets_data.json';


@Injectable({
  providedIn: 'root'
})
export class ProjetsService {


  projets: Projet[] = [];

  constructor() {
    this.projets = projetsData;
  }

  GetProjects(): Projet[] {
    return this.projets;
  }

  GetProjectById(id: number) : Projet {
    let projet = this.projets.find((projet: { id: number; }) => projet.id === id);

    if(projet === undefined){
      throw new TypeError("Aucun projet ne correspond à l'id suivant: " + id)
    }

    return projet;
  }

  GetProjectByFilter(filterTags: string[]): Projet[] {
    const filteredProjects: Projet[] = [];

    this.projets.forEach((projet) => {
      let foundAll = true;

      filterTags.forEach((filterTag) => {
        if (!projet.tags.includes(filterTag)) {
          foundAll = false;
        }
      });

      if (foundAll) {
        filteredProjects.push(projet);
      }
    });

    return filteredProjects;
  } // fonction pour le filtre des projets de ma page portfolio

}
