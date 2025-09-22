import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterAddressCardComponent } from '../../cards-folder/footer-address-card/footer-address-card.component';
import { IonLabel, IonText, IonItem } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'rivy-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss'],
  standalone: true,
  imports: [IonItem, IonText, IonText, IonLabel, RouterLink, CommonModule, FooterAddressCardComponent],
})
export class FooterSectionComponent implements OnInit {
  footerItems = [
    {
      title: 'Product',
      service: [
        { title: 'call', path: '' },
        { title: 'service', path: '' },
        { title: 'customer', path: '' },
      ],
    },
    { title: 'Service',   
      service: [
        { title: 'canddiate', path: '' },
        { title: 'address', path: '' },
        { title: '', path: '' },
      ], },
  ];
  constructor() {}

  ngOnInit() {}
}
