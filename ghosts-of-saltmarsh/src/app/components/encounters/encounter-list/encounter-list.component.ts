import { Observable } from 'rxjs';
import { EncounterService } from './../../../services/encounter/encounter.service';
import { Component, OnInit } from '@angular/core';
import { Encounter } from 'src/app/classes/encounter/encounter';

@Component({
  selector: 'app-encounter-list',
  templateUrl: './encounter-list.component.html',
  styleUrls: ['./encounter-list.component.scss']
})
export class EncounterListComponent implements OnInit {
  encounters$ = new Observable<Encounter[]>()

  constructor(private encounterService: EncounterService) { }

  ngOnInit(): void {
    this.encounters$ = this.encounterService.encounters;
  }

}
