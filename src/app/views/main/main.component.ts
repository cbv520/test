import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceDescriptionService } from 'src/app/service-description/service/service-description.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  
  public showQuery: boolean = true;

  public tabs = [
    "Query Editor",
    "Graphs"
  ]

  routes: {[pageTitle: string]: string} = {
    "Query Editor": "/",
    "Graphs": "/graphs",
  }
  
  public currentPath

  constructor(public serviceDescription: ServiceDescriptionService, private router: Router) {
    this.currentPath = window.location.pathname
  }

  toggleQueryEditor() {
    this.showQuery = !this.showQuery
  }

  ngOnInit(): void {
  }

  navigate(page: string) {
    this.currentPath = this.routes[page];
    this.router.navigate([this.routes[page]])
  }

}
