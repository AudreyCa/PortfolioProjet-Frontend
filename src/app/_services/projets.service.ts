import { Injectable } from '@angular/core';
import { Tag } from '../_models/Tag';
import { Projet } from '../_models/Projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetsService {

  projets: Projet[] = [
    {id: 0, titre: "Sample Python Project", images: ["../../assets/Image1.jpg","../../assets/Image2.jpg","../../assets/Image3.jpg"], lien: "//www.github.com", resume: "Python project that analyzes stock market data.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.REACT]},
    {id: 1, titre: "Sample Angular App", images: ["../../assets/Image1.jpg","../../assets/Image2.jpg","../../assets/Image3.jpg"], lien: "//www.github.com", resume: "Fullstack web app developed using Angular and Node.JS", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS]},
    {id: 2, titre: "Sample .Net App", images: ["../../assets/Image1.jpg","../../assets/Image2.jpg","../../assets/Image3.jpg"], lien: "//www.github.com", resume: "Fullstack web app developed using React and ASP.NET", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.REACT ,Tag.CSHARP, Tag.NODEJS]},
    {id: 3, titre: "Web API Project", images: ["../../assets/Image1.jpg","../../assets/Image2.jpg","../../assets/Image3.jpg"], lien: "//www.github.com", resume: "Web API Project that was developed for a class project.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.CSHARP, Tag.REACT]},
    {id: 4, titre: "Chrome Extension", images: ["../../assets/Image1.jpg","../../assets/Image2.jpg","../../assets/Image3.jpg"], lien: "//www.github.com", resume: "Developed a chrome extension that tracks the prices of furniture.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JAVASCRIPT]},
    {id: 5, titre: "Mobile App", images: ["../../assets/Image1.jpg","../../assets/Image2.jpg","../../assets/Image3.jpg"], lien: "//www.github.com", resume: "Mobile app developed in java that tracks the departure and arrival of trains.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.CSHARP]}
  ];

  constructor() { }

  GetProject() {
    return this.projets;
  }

  GetProjectById(id: number) : Projet {
    let projet = this.projets.find(projet => projet.id === id);

    if(projet === undefined){
      throw new TypeError("Aucun projet ne correspond à l'id suivant: " + id)
    }

    return projet;
  }

}
