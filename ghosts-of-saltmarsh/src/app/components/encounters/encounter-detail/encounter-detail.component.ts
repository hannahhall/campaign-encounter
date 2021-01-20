import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EncounterService } from './../../../services/encounter/encounter.service';
import { Component, OnInit } from '@angular/core';
import { Encounter } from 'src/app/classes/encounter/encounter';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-encounter-detail',
  templateUrl: './encounter-detail.component.html',
  styleUrls: ['./encounter-detail.component.scss']
})
export class EncounterDetailComponent implements OnInit {
  encounter$: Observable<Encounter> | undefined;

  constructor(private encounterService: EncounterService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.encounterService.setEncounter(parseInt(id))
    this.encounter$ = this.encounterService.encounter;
  }

  saveInitiative(encounter: any) {
    console.log(encounter)
    this.encounterService.saveInitiative(encounter.order, encounter.id)
  }

}
