import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonText, IonLabel, IonButton } from '@ionic/angular/standalone'
import { CheckoutCardComponent, GreenCard } from "../cards-folder/checkout-card/checkout-card.component";

@Component({
  selector: 'rivy-green-light',
  templateUrl: './green-light.component.html',
  styleUrls: ['./green-light.component.scss'],
  standalone: true,
  imports: [IonLabel, CommonModule, IonText, CheckoutCardComponent]
})
export class GreenLightComponent  implements OnInit {

  cards: GreenCard[] = [
    {  image: '/assets/image/Solar-Calculator-Illustration-C99ia26j.svg',
  title: 'I have an invoice for my solar setup'},
      {  image: '/assets/image/Solar-Calculator-Illustration_1-VUsVs3f9.svg',
  title: 'I have an invoice for my solar setup'},
  
  ]
  constructor() { }

  ngOnInit() {}

}
