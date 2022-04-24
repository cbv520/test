import { Injectable } from '@angular/core'; 
import * as cytoscape from 'cytoscape';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  public cy: any

  constructor() { 
    console.log("hello");

    
  }
}
