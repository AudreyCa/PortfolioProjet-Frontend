import { Component, ElementRef, OnInit } from '@angular/core';
import { ThemeService } from '../_services/mode.service';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss']
})
export class DarkModeComponent implements OnInit{
  isDark: boolean | undefined;

  constructor(private themeService: ThemeService, private el: ElementRef) {}

  ngOnInit() {
    this.themeService.isDarkTheme.subscribe(isDark => {
      this.isDark = isDark;
    });
    const themeToggle = this.el.nativeElement.querySelector("#theme-toggle");
    themeToggle.setAttribute("aria-label", "Dark ou light?");
  }

  toggleTheme() {
    this.themeService.setDarkTheme(!this.isDark);
    this.updateHtmlClass();
  }

  private updateHtmlClass() {
    const htmlElement = document.documentElement;
    if (this.isDark) {
      htmlElement.classList.add('dark-theme');
      htmlElement.classList.remove('light-theme');
    } else {
      htmlElement.classList.add('light-theme');
      htmlElement.classList.remove('dark-theme');
    }
  }


}
