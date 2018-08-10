import { Component, OnInit } from '@angular/core';

import {Router}  from '@angular/router';

import {User} from './user';

@Component({
  selector: 'app-applogin',
  templateUrl: './applogin.component.html',
  styleUrls: ['./applogin.component.css']
})

export class ApploginComponent implements OnInit {
  user:User = new User();

  router:Router;
  constructor(router:Router) {
    this.router=router;
  }

  onSubmit(){
    console.log(Router  )
      console.log("Form Submitted")
      console.log(this.user);
      this.router.navigate(['search']);
  }
  ngOnInit() {
  }

}
