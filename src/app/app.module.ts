import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/pages/home/home.component';
import { RatingModule } from 'ng-starrating';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './component/search/search.component';
import { TagComponent } from './component/tag/tag.component';
import { FoodpageComponent } from './component/pages/foodpage/foodpage.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { NotFoundComponent } from './component/pages/not-found/not-found.component';
// import {} from 'pdfmake/src/3rd-party/svg-to-pdfkit'
// import {SampleModule} from 'angular-pdf-generator'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagComponent,
    FoodpageComponent,
    CartPageComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
