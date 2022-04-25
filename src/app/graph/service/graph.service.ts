import { Injectable } from '@angular/core'; 
import * as cytoscape from 'cytoscape';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  public cy: any

  public onlineStatus: any = {
  }

  constructor() { 
    console.log("hello");    
  }
}
