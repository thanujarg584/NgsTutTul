import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewsKomComponent } from './news-kom/news-kom.component';
import { CartKomComponent } from './cart-kom/cart-kom.component';
import { CartItemKomComponent } from './cart-item-kom/cart-item-kom.component';
import { ProdKomComponent } from './prod-kom/prod-kom.component';
import { ListCrudKomComponent } from './list-crud-kom/list-crud-kom.component';
import { HomeKomComponent } from './home-kom/home-kom.component';
import { ProdDetailKomComponent } from './prod-detail-kom/prod-detail-kom.component';
import { ProdAddKomComponent } from './prod-add-kom/prod-add-kom.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const AppNavNryVar: Routes = [
  { path: '', component: HomeKomComponent },
  { path: 'prod', component: ProdKomComponent },
  { path: 'prod/:name', component: ProdDetailKomComponent },
  { path: 'cart', component: CartKomComponent },
  { path: 'list', component: ListCrudKomComponent },
  { path: 'add', component: ProdAddKomComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NewsKomComponent,
    CartItemKomComponent,
    ListCrudKomComponent,
    ProdKomComponent,
    CartKomComponent,
    HomeKomComponent,
    ProdDetailKomComponent,
    ProdAddKomComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(AppNavNryVar),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
