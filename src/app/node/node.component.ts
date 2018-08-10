import { Component, OnInit, Input, Output,EventEmitter, ElementRef, ViewChild , AfterViewInit} from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit , AfterViewInit{
  @ViewChild("mydiv")
  mydiv:ElementRef;
  @Input()
  title:string

  @Output()
  change:EventEmitter<any> = new EventEmitter<any>();
  constructor() {

  }
 send(){
   console.log("sending ...... ")
   this.change.emit("something......")
 }
  ngAfterViewInit(){
  console.log(this.title)
  //  console.log($(this.mydiv.nativeElement).slideUp(5000));
  }
  ngOnInit() {

  }

}
