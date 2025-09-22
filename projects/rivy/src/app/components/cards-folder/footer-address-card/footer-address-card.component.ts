import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { IonText, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'rivy-footer-address-card',
  templateUrl: './footer-address-card.component.html',
  styleUrls: ['./footer-address-card.component.scss'],
  standalone: true,
  imports: [IonLabel, IonText, CommonModule]
})
export class FooterAddressCardComponent  implements OnInit {

  addressProp = [
    {title: 'Address', value: '174B Corporation Drive, Dolphin Estate, Ikoyi'},
    {title: 'Contact Support', value: '02018891860'},
  ]

  platforms = [
    {image: '/assets/icon/playstore.svg', label: 'Get on Google store '},
    {image: '/assets/icon/apple.svg', label: 'Get on App store '},
  ]
  constructor() { }

  ngOnInit() {}

}
