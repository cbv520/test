import { Component, OnInit } from '@angular/core';
import { ServiceDescriptionService } from '../../service/service-description.service';

@Component({
  selector: 'app-service-desccription',
  templateUrl: './service-desccription.component.html',
  styleUrls: ['./service-desccription.component.scss']
})
export class ServiceDesccriptionComponent implements OnInit {

  constructor(public serviceDescription: ServiceDescriptionService) { }

  ngOnInit(): void {
  }

  close () {
    console.log("REEEE")
    this.serviceDescription.show = false;
  }

}
