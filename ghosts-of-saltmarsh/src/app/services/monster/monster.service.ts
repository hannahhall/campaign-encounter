import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Monster } from 'src/app/classes/monster/monster';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  private _monsters = new BehaviorSubject<Monster[]>([]);
  private _monster = new BehaviorSubject<Monster>(new Monster({}))

  constructor(private http: HttpClient) {
    this.loadInitialData();
  }

  get monsters() {
    return this._monsters.asObservable();
  }

  get monster() {
    return this._monster.asObservable();
  }

  getAllMonsters() {
    return this.http.get(`gos/api/monsters/`);
  }

  loadInitialData() {
    this.getAllMonsters().subscribe(
      (res: any) => {
        let monsters = res.map((monster: any) =>
          new Monster(monster)
        );
        this._monsters.next(monsters);
      },
      err => console.log('Error getting monsters', err)
    );
  }

  setMonster(index: string) {
    return this.http.get(`gos/api/monsters/${index}`).subscribe(
      (res: any) => {
        let monster = new Monster(res);
        this._monster.next(monster);
      }
    )
  }
}

