import { Component, OnInit } from '@angular/core';
import {PersonService} from '../person.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  myversion:number ;
  constructor(personService:PersonService) {
    this.myversion = personService.version;
  }

  ngOnInit() {
  }

}
