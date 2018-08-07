import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import persons from './persons';
import {PersonService} from '../person.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  maxRows = 10;
  myversion:number=0;
  offset:number = 0;
  listBuffer : any ;
  listPersons:any =[
      {name: "nilesh1", email:"n@abc.com", jobTitle:"Developer"},
      {name: "nilesh2", email:"n@abc.com", jobTitle:"Developer"},
      {name: "nilesh3", email:"n@abc.com", jobTitle:"Developer"},
      {name: "nilesh4", email:"n@abc.com", jobTitle:"Developer"},
      {name: "nilesh5", email:"n@abc.com", jobTitle:"Developer"},
      {name: "nilesh6", email:"n@abc.com", jobTitle:"Developer"},
      {name: "nilesh7", email:"n@abc.com", jobTitle:"Developer"},
      {name: "nilesh8", email:"n@abc.com", jobTitle:"Developer"},
      {name: "nilesh9", email:"n@abc.com", jobTitle:"Developer"},
      {name: "nilesh10", email:"n@abc.com", jobTitle:"Developer"},
      {name: "nilesh11", email:"n@abc.com", jobTitle:"Developer"},
      {name: "nilesh12", email:"n@abc.com", jobTitle:"Developer"},
      {name: "nilesh13", email:"n@abc.com", jobTitle:"Developer"},
      {name: "nilesh14", email:"n@abc.com", jobTitle:"Developer"},
      {name: "nilesh15", email:"n@abc.com", jobTitle:"Developer"},
      {name: "nilesh16", email:"n@abc.com", jobTitle:"Developer"},
      {name: "nilesh17", email:"n@abc.com", jobTitle:"Developer"},
      {name: "nilesh18", email:"n@abc.com", jobTitle:"Developer"},
      {name: "nilesh19", email:"n@abc.com", jobTitle:"Developer"},
      {name: "nilesh20", email:"n@abc.com", jobTitle:"Developer"},
      {name: "nilesh21", email:"n@abc.com", jobTitle:"Developer"},
      {name: "nilesh22", email:"n@abc.com", jobTitle:"Developer"},
      {name: "nilesh", email:"n@abc.com", jobTitle:"Developer"},
      {name: "nilesh23", email:"n@abc.com", jobTitle:"Developer"},
      {name: "nilesh24", email:"n@abc.com", jobTitle:"Developer"},
      {name: "nilesh25", email:"n@abc.com", jobTitle:"Developer"},
      {name: "nilesh26", email:"n@abc.com", jobTitle:"Developer"},
      {name: "nilesh27", email:"n@abc.com", jobTitle:"Developer"},
      {name: "nilesh28", email:"n@abc.com", jobTitle:"Developer"},
      {name: "nilesh29", email:"n@abc.com", jobTitle:"Developer"},
      {name: "nilesh30", email:"n@abc.com", jobTitle:"Developer"}
  ];
  nextPage(){
    console.log("here.")
      this.offset = this.offset + this.maxRows;
      console.log(this.offset)
      console.log(this.maxRows);
      this.listPersons = this.listBuffer.slice(this.offset,this.listBuffer.length-this.maxRows);
  }

  prevPage(){

  }
  personService:PersonService;

  constructor(personService:PersonService) {
    this.personService = personService;
     this.listBuffer = Object.assign(this.listPersons, this.listBuffer)
     this.listPersons = this.listBuffer.slice(this.offset,this.maxRows);
  }

  changeVersion(){
    console.log("changing the version ")
    this.myversion = this.myversion+10;
  }
  handleCopyright($event){
      console.log("Wow i was clicked " , $event);
  }
  handleRowClick($event , person_p){
      console.log(person_p);
  }
  ngOnInit() {
  }
}
