import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterAddressCardComponent } from '../../cards-folder/footer-address-card/footer-address-card.component';
import { IonLabel } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { SocialBarComponent } from "../social-bar/social-bar.component";

@Component({
  selector: 'rivy-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss'],
  standalone: true,
  imports: [IonLabel, RouterLink, CommonModule, FooterAddressCardComponent, SocialBarComponent],
})
export class FooterSectionComponent implements OnInit {
  footerItems = [
    {
      title: 'Products',
      service: [
        { title: 'Inventory Financing', path: '' },
        { title: 'Assets Financing', path: '' },
        { title: 'Microgrid Financing', path: '' },
        { title: 'Carbon Financing', path: '' },
        { title: 'EnergyStack', path: '' },
      ],
    },
    { title: 'Service',   
      service: [
        { title: 'About Us', path: '' },
        { title: 'Career', path: '' },
        { title: 'Social Calculator', path: '' },
      ], },
  ];
  constructor() {}

  ngOnInit() {}
}
