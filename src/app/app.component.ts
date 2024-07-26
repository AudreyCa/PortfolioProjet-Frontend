import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { ThemeService } from './_services/mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PortfolioProjet';
  isDarkMode: boolean | undefined;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.isDarkTheme.subscribe(isDarkMode => {
      this.isDarkMode = isDarkMode;
    });
  }
}
