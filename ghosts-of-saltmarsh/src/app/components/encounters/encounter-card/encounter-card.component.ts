import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-encounter-card',
  templateUrl: './encounter-card.component.html',
  styleUrls: ['./encounter-card.component.scss']
})
export class EncounterCardComponent implements OnInit {
  @Input() member: any;
  @Input() started: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
