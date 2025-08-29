import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { IonLabel } from "@ionic/angular/standalone";
import { AdEnergyCardComponent } from "../cards-folder/ad-energy-card/ad-energy-card.component";
import { adEnergy } from 'src/app/interface/ad-energy-card';

@Component({
  selector: 'rivy-ad-energy',
  templateUrl: './ad-energy.component.html',
  styleUrls: ['./ad-energy.component.scss'],
  standalone: true,
  imports: [IonLabel, CommonModule, AdEnergyCardComponent]
})
export class AdEnergyComponent  implements OnInit {

  title: string ='Many ways to make <br> clean energy yours';
  @Input() cards!: adEnergy[];

  constructor() { }

  ngOnInit() {}

}
