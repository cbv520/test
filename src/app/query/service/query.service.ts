import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  public text: string = "ASK {\n    \n}"

  constructor() { }
}
