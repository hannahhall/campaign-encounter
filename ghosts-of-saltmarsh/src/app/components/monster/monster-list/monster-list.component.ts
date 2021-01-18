import { MonsterService } from './../../../services/monster/monster.service';
import { Component, OnInit } from '@angular/core';
import { Monster } from 'src/app/classes/monster/monster';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monster-list',
  templateUrl: './monster-list.component.html',
  styleUrls: ['./monster-list.component.scss']
})
export class MonsterListComponent implements OnInit {
  monsters$: Observable<Monster[]> | undefined;
  
  constructor(private monsterService: MonsterService, private router: Router) { }

  ngOnInit(): void {
    this.monsters$ = this.monsterService.monsters;
  }

  goToMonster(index: string) {
    this.monsterService.setMonster(index);
    this.router.navigate(['monsters', index])
  }

}
