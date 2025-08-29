import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeroSectionComponent } from 'src/app/components/hero-section/hero-section.component';
import { AdEnergyComponent } from 'src/app/components/ad-energy/ad-energy.component';
import { adEnergy } from 'src/app/interface/ad-energy-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent, HeroSectionComponent, AdEnergyComponent, CommonModule],
})
export class HomePage {
  cards: adEnergy[] = [
    {
      background: '#5cd1f4',
      title: 'Iventory Finance',
      subTitle: 'Solar demand is growing, your business should grow too',
      btnText: 'Get access',
      backgroundImg: '/assets/image/inventory-5HbNxl3p.svg',
    },
    {
      background: '#fbc56f',
      title: 'Asset Finance',
      subTitle: 'You should not need a fortune to pwoer your home or business',
      btnText: 'Get access',
      backgroundImg: '/assets/image/asset-DIdxap39.svg',
    },
    {
      background: '#15dda9',
      title: 'Carbon Finance',
      subTitle: 'Track your clean energy impact and turn it itnot income.',
      btnText: 'Get access',
      backgroundImg: '/assets/image/turbine-6jHg6Q-d.svg',
    },
    {
      background: '#ff7646',
      title: 'Energy Stack',
      subTitle: 'Buy high-quality and authentic solar equipment for your home, business or energy projects',
      btnText: 'Get access',
      backgroundImg: '/assets/image/download.svg',
    },
  ];
  constructor() {}
}
