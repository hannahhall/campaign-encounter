import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Monster } from 'src/app/classes/monster/monster';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.scss']
})
export class FormCardComponent implements OnInit {
  @Input() type!: string;
  @Input() monsters: Monster[] = [];
  @Input() players: any = [];

  @Output() selectMonster = new EventEmitter();
  @Output() selectPlayer = new EventEmitter();
  @Output() addToEncounter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}
