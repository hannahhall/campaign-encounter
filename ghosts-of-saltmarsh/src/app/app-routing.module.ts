import { EncounterFormComponent } from './components/encounters/encounter-form/encounter-form.component';
import { EncounterDetailComponent } from './components/encounters/encounter-detail/encounter-detail.component';
import { EncounterListComponent } from './components/encounters/encounter-list/encounter-list.component';
import { MonsterDetailComponent } from './components/monster/monster-detail/monster-detail.component';
import { MonsterListComponent } from './components/monster/monster-list/monster-list.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'monsters/:index',
    component: MonsterDetailComponent
  },
  {
    path: 'monsters',
    component: MonsterListComponent
  },
  {
    path: 'encounters/:id',
    component: EncounterDetailComponent
  },
  {
    path: 'encounters',
    component: EncounterListComponent
  },
  {
    path: 'create-encounter',
    component: EncounterFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
