import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {

  isExperienceOpen : boolean = false;
  isEtudesOpen : boolean = false;
  isDilpomesOpen: boolean = false;
  isSkillsOpen : boolean = false;

  constructor(private titleService: Title, private renderer: Renderer2){
    this.titleService.setTitle('Audrey Cannesson - Expériences');
  }

  DownloadCV() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', "_blank");
    link.setAttribute('href', "../../assets/CV_DevWeb_AudreyCannesson.pdf");
    link.setAttribute('download', "CV_DevWeb_AudreyCannesson.pdf"); // nom de mon CV
    link.click(); // download le temps d'etre récupérer
    link.remove(); // puis enlever de notre site jusqu'au prochain click
  }
}
