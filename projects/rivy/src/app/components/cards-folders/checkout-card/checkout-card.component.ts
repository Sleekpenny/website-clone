import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonItem, IonCheckbox, IonButton, IonIcon, IonLabel } from "@ionic/angular/standalone";

export interface GreenCard {
  image: string;
  title: string;
}
@Component({
  selector: 'rivy-checkout-card',
  templateUrl: './checkout-card.component.html',
  styleUrls: ['./checkout-card.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, CommonModule, IonLabel, IonCheckbox]
})
export class CheckoutCardComponent  implements OnInit {

checkedIndex: number | null = null;
@Input() cards!: GreenCard[];

constructor() { }

ngOnInit() {}

onCheckboxChange(event: any, index: number) {
  if (event.detail.checked) {
    this.checkedIndex = index;
  } else {
    this.checkedIndex = null;
  }
}
}