import { NavComponent } from './components/nav/nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonsterListComponent } from './components/monster/monster-list/monster-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MonsterDetailComponent } from './components/monster/monster-detail/monster-detail.component';
import { EncounterListComponent } from './components/encounters/encounter-list/encounter-list.component';
import { EncounterDetailComponent } from './components/encounters/encounter-detail/encounter-detail.component';
import { EncounterCardComponent } from './components/encounters/encounter-card/encounter-card.component';
import { FormsModule } from '@angular/forms';
import { EncounterFormComponent } from './components/encounters/encounter-form/encounter-form.component';
import { FormCardComponent } from './components/encounters/form-card/form-card.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MonsterListComponent,
    MonsterDetailComponent,
    EncounterListComponent,
    EncounterDetailComponent,
    EncounterCardComponent,
    EncounterFormComponent,
    FormCardComponent,
    HeroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
