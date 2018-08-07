import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directdemo',
  templateUrl: './directdemo.component.html',
  styleUrls: ['./directdemo.component.css']
})
export class DirectdemoComponent implements OnInit {
  orders:any = [
      {orderid: 1 , quantity : 1 , instock : true},
      {orderid: 2 , quantity : 1 , instock : true},
      {orderid: 3 , quantity : 1 , instock : true},
      {orderid: 4 , quantity : 1 , instock : true},
      {orderid: 5 , quantity : 1 , instock : true},
      {orderid: 6 , quantity : 0 , instock : false},
  ]
  constructor() { }

  ngOnInit() {
  }

}
