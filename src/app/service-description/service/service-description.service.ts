import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceDescriptionService {
  public show: boolean = false;
  public service: any

  update(node: any) {
    this.show = true;
    this.service = {
      name: node.id
    }
  }

  constructor() { }
}
