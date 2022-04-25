import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public map: {[key: string]: string} = {
    server: "http://localhost:8080",
    mode: "K8s"
  }

  constructor() { }
}
