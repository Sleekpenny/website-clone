import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { HeroSectionComponent } from "src/app/components/hero-section/hero-section.component";
import { AdEnergyComponent } from "src/app/components/ad-energy/ad-energy.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent, HeaderComponent, HeroSectionComponent, AdEnergyComponent],
})
export class HomePage {
  constructor() {
  }
}
