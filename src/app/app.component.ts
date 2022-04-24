import { Component } from '@angular/core';
import { ServiceDescriptionService } from './service-description/service/service-description.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portgraph';

  public showQuery: boolean = true;

  constructor(public serviceDescription: ServiceDescriptionService) {

  }

  toggleQueryEditor() {
    this.showQuery = !this.showQuery
  }
}
