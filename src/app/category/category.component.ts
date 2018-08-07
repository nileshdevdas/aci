import { Component, OnInit } from '@angular/core';
import {PubsubService} from '../pubsub.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: any = ["AppServer", "DB"]
  pubsub:PubsubService;

  selectCategory(cat) {
    console.log(cat);
    console.log("Broadcasing ------------>")
    this.pubsub.broadcast(cat);
  }
  constructor(pubsub:PubsubService) {
      this.pubsub=pubsub;
  }

  ngOnInit() {
  }

}
