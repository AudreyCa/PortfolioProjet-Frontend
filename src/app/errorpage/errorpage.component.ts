import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.scss']
})
export class ErrorpageComponent {
  constructor(private titleService: Title){
    this.titleService.setTitle("Oups...un problème est survenu !");
  }
}
