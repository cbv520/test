import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portgraph';

  public currentPath

  public pageTitles = [
    "Catalog",
    "Settings"
  ]

  routes: {[pageTitle: string]: string} = {
    "home": "/",
    "Catalog": "/catalog",
    "Settings": "/settings"
  }

  constructor(private router: Router) {
    this.currentPath = window.location.pathname
  }

  navigate(page: string) {
    this.currentPath = this.routes[page];
    this.router.navigate([this.routes[page]])
  }
}
