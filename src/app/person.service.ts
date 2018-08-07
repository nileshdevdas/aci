import { Injectable } from '@angular/core';

@Injectable()
export class PersonService {
  version:number = 1.0;

  constructor() {
      console.log("i was instantiated .........");
  }

}
