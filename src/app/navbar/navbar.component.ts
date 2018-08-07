import { Component, OnInit } from '@angular/core';
import {PersonService} from '../person.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  myversion:number;
  constructor(personService:PersonService) {
    this.myversion = personService.version;
  }

  ngOnInit() {
  }

}
