import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonLabel, IonIcon } from "@ionic/angular/standalone";
import { adEnergy } from 'src/app/interface/ad-energy-card';

@Component({
  selector: 'rivy-ad-energy-card',
  templateUrl: './ad-energy-card.component.html',
  styleUrls: ['./ad-energy-card.component.scss'],
  standalone: true,
  imports: [IonIcon, IonLabel, CommonModule, RouterLink]
})
export class AdEnergyCardComponent  implements OnInit {

  @Input() card!: adEnergy;

  constructor() { }

  ngOnInit() {}

}
