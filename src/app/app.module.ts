import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';


import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule}  from '@angular/forms';






import { PubsubService } from './pubsub.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PersonService } from './person.service';
import { DirectdemoComponent } from './directdemo/directdemo.component';
import { CategoryComponent } from './category/category.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { HihgligterDirective } from './hihgligter.directive';
import { ApidemoComponent } from './apidemo/apidemo.component';
import { EmployeeDaoService } from './employee-dao.service';
import { LoginComponent } from './login/login.component';
import { NodeComponent } from './node/node.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { AppsearchComponent } from './appsearch/appsearch.component';
import { AppaboutComponent } from './appabout/appabout.component';
import { ApploginComponent } from './applogin/applogin.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes = [
  {
     path : "",
     component : ApphomeComponent
  },
  {
     path : "home",
     component : ApphomeComponent
  },
  {
     path : "search",
     component : AppsearchComponent
  },
  {
     path : "about",
     component : AppaboutComponent
  },
  {
     path : "login",
     component : ApploginComponent
  },
  {
     path : "**",
     component : NotfoundComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    DirectdemoComponent,
    CategoryComponent,
    ProductlistComponent,
    HihgligterDirective,
    ApidemoComponent,
    LoginComponent,
    NodeComponent,
    ApphomeComponent,
    AppsearchComponent,
    AppaboutComponent,
    ApploginComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PersonService, PubsubService, EmployeeDaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
