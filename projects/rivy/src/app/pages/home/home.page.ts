import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { HeroSectionComponent } from "src/app/components/hero-section/hero-section.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonText, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, HeaderComponent, HeroSectionComponent],
})
export class HomePage {
  constructor() {
  }
}
