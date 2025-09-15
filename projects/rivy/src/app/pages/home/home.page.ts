import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeroSectionComponent } from 'src/app/components/hero-section/hero-section.component';
import { AdEnergyComponent } from 'src/app/components/ad-energy/ad-energy.component';
import { adEnergy } from 'src/app/interface/ad-energy-card';
import { CommonModule } from '@angular/common';
import { CleanEnergyComponent } from "src/app/components/clean-energy/clean-energy.component";
import { GreenLightComponent } from "src/app/components/green-light/green-light.component";
import { GateAccessComponent } from "src/app/components/gate-access/gate-access.component";
import { AnalyticsComponent } from "src/app/components/analytics/analytics.component";
import { analyticCard } from 'src/app/components/cards-folder/analytics-card/analytics-card.component';
import { PartnershipComponent } from 'src/app/components/partnership/partnership.component';
import { FaqSectionComponent } from "src/app/components/faq-section/faq-section.component";
import { FooterAdComponent } from "src/app/components/footer/footer-ad/footer-ad.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent, HeroSectionComponent, AdEnergyComponent, CommonModule, CleanEnergyComponent, GreenLightComponent, GateAccessComponent, AnalyticsComponent, PartnershipComponent, FaqSectionComponent, FooterAdComponent],
})
export class HomePage {
  cards: adEnergy[] = [
    {
      background: '#5cd1f4',
      title: 'Iventory <br> Finance',
      subTitle: 'Solar demand is growing, your business should grow too',
      btnText: 'Get access',
      backgroundImg: '/assets/image/inventory-5HbNxl3p.svg',
    },
    {
      background: '#fbc56f',
      title: 'Asset <br> Finance',
      subTitle: 'You should not need a fortune to pwoer your home or business',
      btnText: 'Get access',
      backgroundImg: '/assets/image/asset-DIdxap39.svg',
    },
    {
      background: '#15dda9',
      title: 'Carbon <br> Finance',
      subTitle: 'Track your clean energy impact and turn it itnot income.',
      btnText: 'Get access',
      backgroundImg: '/assets/image/turbine-6jHg6Q-d.svg',
    },
    {
      background: '#ff7646',
      title: 'Energy <br> Stack',
      subTitle: 'Buy high-quality and authentic solar equipment for your home, business or energy projects',
      btnText: 'Get access',
      backgroundImg: '/assets/image/download.svg',
    },
  ];

  analytics: analyticCard[] = [
    {
    image: '/assets/image/download shape.svg',
    subTitle: 'in disbursement',
    title: '#38B', 
    background: 'oklch(79.82% .1594 167.83)'
  },
    {
    image: '/assets/image/download boxes.svg',
    subTitle: 'loans approved',
    title: '37k', 
    background: 'oklch(80.72% .1153 220.72)'
  },
    {
    image: '/assets/image/download chart.svg',
    subTitle: 'users on this platform',
    title: '6,000', 
    background: 'oklch(85.44% .1208 77.63)'
  }
  ]
  constructor() {}
}
