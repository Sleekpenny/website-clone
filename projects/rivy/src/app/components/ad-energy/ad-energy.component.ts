import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonLabel } from "@ionic/angular/standalone";
import { AdEnergyCardComponent } from "../cards-folder/ad-energy-card/ad-energy-card.component";

@Component({
  selector: 'rivy-ad-energy',
  templateUrl: './ad-energy.component.html',
  styleUrls: ['./ad-energy.component.scss'],
  standalone: true,
  imports: [IonLabel, CommonModule, AdEnergyCardComponent]
})
export class AdEnergyComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
