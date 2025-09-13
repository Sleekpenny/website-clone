import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'rivy-gate-access',
  templateUrl: './gate-access.component.html',
  styleUrls: ['./gate-access.component.scss'],
  standalone: true,
  imports: [IonLabel, CommonModule]
})
export class GateAccessComponent  implements OnInit {

  title:string = 'This gate is open Step through';
  subTitle: string = 'With quick and easy credit, we break down the barriers between people and power. What starts as access for one becomes access for all.'
  constructor() { }

  ngOnInit() {}

}
