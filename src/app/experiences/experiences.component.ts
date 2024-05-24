import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {

  constructor(private titleService: Title){
    this.titleService.setTitle('Audrey Cannesson - Expériences');
  }
}
