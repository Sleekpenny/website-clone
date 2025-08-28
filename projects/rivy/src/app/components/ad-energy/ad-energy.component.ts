import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'rivy-ad-energy',
  templateUrl: './ad-energy.component.html',
  styleUrls: ['./ad-energy.component.scss'],
  standalone: true,
  imports: [IonLabel, CommonModule]
})
export class AdEnergyComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
