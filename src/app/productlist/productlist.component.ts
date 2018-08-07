import { Component, OnInit } from '@angular/core';
import {PubsubService} from '../pubsub.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  category=null;
  summer:false;
  productList: any = [
    { productName: "IBM", category: "AppServer", name: "WAS " },
    { productName: "Oracle", category: "DB", name: "Oracle 12c DB " },
    { productName: "MySQL", category: "DB", name: "MySQL " }
  ];

  constructor(pubsub:PubsubService) {
      pubsub.listen().subscribe((payload)=>{
          console.log("IN the product List :----> " , payload);
          this.category=payload;
      });
  }

  ngOnInit() {
  }

}
