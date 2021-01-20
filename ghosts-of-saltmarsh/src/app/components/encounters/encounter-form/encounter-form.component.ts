import { MonsterService } from './../../../services/monster/monster.service';
import { Component, OnInit } from '@angular/core';
import { Monster } from 'src/app/classes/monster/monster';
import { Observable } from 'rxjs';
import { PlayerService } from 'src/app/services/player/player.service';

@Component({
  selector: 'app-encounter-form',
  templateUrl: './encounter-form.component.html',
  styleUrls: ['./encounter-form.component.scss']
})
export class EncounterFormComponent implements OnInit {
  monsters: Monster[] = [];
  selectedMonsters: Monster[] = [];
  selectedPlayers: string[] = [];
  selectedMonster: Monster | undefined;
  players: any;

  constructor(private monsterService: MonsterService, private playerService: PlayerService) { }

  ngOnInit(): void {
    this.monsterService.monsters.subscribe(monsters => this.monsters = monsters);
    this.playerService.players.subscribe(players => this.players = players)
    this.monsterService.monster.subscribe(monster => this.selectedMonster = monster)
  }

  selectMonster(event: any) {
    const index = event.target.value.toLowerCase().replace(/ /g, '-');
    this.monsterService.setMonster(index);
  }

  selectPlayer(event: any) {
    const {value, checked } = event.target;
    if (checked) {
      this.selectedPlayers.push(value);
    } else {
      this.selectedPlayers = this.selectedPlayers.filter(p => p !== value);
    }
  }

  addToEncounter() {
    this.selectedMonsters.push(this.selectedMonster!)
    console.log(this.selectedMonsters)
    this.monsterService.setMonster('')
  }

}
