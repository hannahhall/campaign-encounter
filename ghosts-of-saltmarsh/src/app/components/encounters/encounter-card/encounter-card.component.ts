import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-encounter-card',
  templateUrl: './encounter-card.component.html',
  styleUrls: ['./encounter-card.component.scss']
})
export class EncounterCardComponent implements OnInit {
  @Input() member: any;
  @Input() started: boolean = false;
  @Input() isTurn: boolean = false;

  @Output() updateHitPoints = new EventEmitter()

  changeHp:number = 0;


  constructor() { }

  ngOnInit(): void {
  }

}
