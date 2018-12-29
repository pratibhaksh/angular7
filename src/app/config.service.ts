import { Injectable } from '@angular/core';
import { configaration } from './configauration';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config = configaration;

  constructor() { }
   getData()
   {
     return this.config = configaration;
   }
   
}
