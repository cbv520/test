import { Component, OnInit } from '@angular/core';
import { GraphService } from 'src/app/graph/service/graph.service';
import { ServiceDescriptionService } from '../../service/service-description.service';

@Component({
  selector: 'app-service-desccription',
  templateUrl: './service-desccription.component.html',
  styleUrls: ['./service-desccription.component.scss']
})
export class ServiceDesccriptionComponent implements OnInit {

  constructor(public serviceDescription: ServiceDescriptionService, public graphService: GraphService) { }

  ngOnInit(): void {
  }

  close () {
    console.log("REEEE")
    this.serviceDescription.show = false;
  }

}
