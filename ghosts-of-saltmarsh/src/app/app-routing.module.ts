import { MonsterDetailComponent } from './components/monster/monster-detail/monster-detail.component';
import { MonsterListComponent } from './components/monster/monster-list/monster-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'monsters/:index',
    component: MonsterDetailComponent
  },
  {
    path: 'monsters',
    component: MonsterListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
