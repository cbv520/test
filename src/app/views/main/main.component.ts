import { Component, OnInit } from '@angular/core';
import { ServiceDescriptionService } from 'src/app/service-description/service/service-description.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  
  public showQuery: boolean = true;

  constructor(public serviceDescription: ServiceDescriptionService) {
  }

  toggleQueryEditor() {
    this.showQuery = !this.showQuery
  }

  ngOnInit(): void {
  }

}
