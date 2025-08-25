import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonLabel, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'rivy-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, CommonModule]
})
export class HeroSectionComponent  implements OnInit {

  hero = {
    textInfo: ' a world where energy flows',
    textInfoUnderline: 'for all',
    supportText: 'We are building the financial infrasture to make clean energy easy to afford, quick to access and open to all',
    image: '/assets/image/Home_hero_image-DpkZpKmB.webp',
    btn: 'Get access'
  }
  constructor() { }

  ngOnInit() {}

}
