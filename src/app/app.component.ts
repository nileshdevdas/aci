import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterMessage = "THis is master messaage";

  handleChange($event){
    console.log("Received Event ...... ", $event)
  }

  changeMessage(){
     this.masterMessage = "xxx-0q;ljadfsjalaksjdf";
  }
}
