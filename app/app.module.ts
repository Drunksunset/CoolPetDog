import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { DealComponent } from './deal/deal.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { routing } from './app.route';
import { ForumComponent } from './forum/forum.component';
import { FootComponent } from './foot/foot.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StoreComponent,
    DealComponent,
    RegisterComponent,
    NavComponent,
    ForumComponent,
    FootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
