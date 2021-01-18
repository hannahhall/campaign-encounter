import { MonsterService } from './../../../services/monster/monster.service';
import { Component, OnInit } from '@angular/core';
import { Monster } from 'src/app/classes/monster/monster';

@Component({
  selector: 'app-monster-detail',
  templateUrl: './monster-detail.component.html',
  styleUrls: ['./monster-detail.component.scss']
})
export class MonsterDetailComponent implements OnInit {
  monster$: any;

  constructor(private monsterService: MonsterService) { }

  ngOnInit(): void {
    this.monster$ = this.monsterService.monster
  }

  convertBreaks(text: string) {
    return text.replace(/(\\r\\n)|([\r\n])/gmi, '<br/>');
  }
}
