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
}