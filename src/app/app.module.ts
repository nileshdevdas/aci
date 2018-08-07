import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

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
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [PersonService, PubsubService, EmployeeDaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
