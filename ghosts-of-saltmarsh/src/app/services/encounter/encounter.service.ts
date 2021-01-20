import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Encounter } from 'src/app/classes/encounter/encounter';

@Injectable({
  providedIn: 'root'
})
export class EncounterService {
  private _encounters = new BehaviorSubject<Encounter[]>([]);
  private _encounter = new BehaviorSubject<Encounter>(new Encounter({}))

  constructor(private http: HttpClient) {
    this.loadInitialData();
  }

  get encounters() {
    return this._encounters.asObservable();
  }

  get encounter() {
    return this._encounter.asObservable();
  }

  getAllEncounters() {
    return this.http.get(`gos/api/encounters/`);
  }

  loadInitialData() {
    this.getAllEncounters().subscribe(
      (res: any) => {
        let encounters = res.map((encounter: any) =>
          new Encounter(encounter)
        );
        this._encounters.next(encounters);
      },
      err => console.log('Error getting encounters', err)
    );
  }

  setEncounter(id: number) {
    return this.http.get(`gos/api/encounters/${id}`).subscribe(
      (res: any) => {
        let encounter = new Encounter(res);
        this._encounter.next(encounter);
      }
    )
  }

  saveEncounter(encounter: any) {
    this.http.post('gos/api/encounters/', encounter).subscribe(
      (res) => {
        this.loadInitialData()
      }
    )
  }

  saveInitiative(order: any, encounterId: number) {
    this.http.put(`gos/api/encounters/${encounterId}/save_initiative/`, { order }).subscribe((res) => {
      this._encounter.next(res as Encounter);
    })
  }

  updateHitPoints(encounterId: number, update: any) {
    this.http.put(`gos/api/encounters/${encounterId}/update_hit_points/`, update).subscribe((res) => {
      this._encounter.next(res as Encounter);
    })
  }

  updateTurn(encounterId: number) {
    this.http.put(`gos/api/encounters/${encounterId}/update_turn/`, {}).subscribe((res) => {
      this._encounter.next(res as Encounter);
    })
  }
}
