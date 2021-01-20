import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Monster } from 'src/app/classes/monster/monster';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private _players = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) {
    this.loadInitialData();
  }

  get players() {
    return this._players.asObservable();
  }

  getAllPlayers() {
    return this.http.get(`gos/api/players/`);
  }

  loadInitialData() {
    this.getAllPlayers().subscribe(
      (data: any) => {
        this._players.next(data.results);
      },
      err => console.log('Error getting players', err)
    );
  }
}

