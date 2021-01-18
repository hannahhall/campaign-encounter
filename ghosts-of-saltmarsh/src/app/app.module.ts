import { NavComponent } from './components/nav/nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonsterListComponent } from './components/monster/monster-list/monster-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MonsterDetailComponent } from './components/monster/monster-detail/monster-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MonsterListComponent,
    MonsterDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
