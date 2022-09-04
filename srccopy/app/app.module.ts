import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.componentcopy';
import { NewsKomComponent } from './news-kom/news-kom.component';
import { CartKomComponent } from './cart-kom/cart-kom.componentcopy';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListCrudKomComponent } from './list-crud-kom/list-crud-kom.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsKomComponent,
    CartKomComponent,
    ListCrudKomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
