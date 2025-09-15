import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonLabel,
} from '@ionic/angular/standalone';
import { FaqListingComponent } from '../cards-folder/faq-listing/faq-listing.component';
import { FAQCollections } from 'src/app/interface/faq.interface';

@Component({
  selector: 'rivy-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FaqListingComponent,
    IonLabel,
  ],
})
export class FaqSectionComponent implements OnInit {
  faqTitle: string = 'Frequently Asked Questions';
  @Input() faqItems: FAQCollections[] = [
    {
      value: 1,
      header: 'Who qualify for  ',
      title: 'Rivy solar financing is design for:',
      list: [
        'Business owners seeking to reduce energy costs and enhance reliability',
        'Pomeowners aiming to transition to clean, uninterrupted power',
        'Solar vendors needing inventory financing to meet demand',
      ],
    },

    {
      value: 2,
      header: 'for Rivy clean energy loand ',
      title: 'Rivy solar financing is design for:',
      list: [
        'Business owners seeking to reduce energy costs and enhance reliability',
        'Pomeowners aiming to transition to clean, uninterrupted power',
        'Solar vendors needing inventory financing to meet demand',
      ],
    },

    {
      value: 3,
      header: 'Who qualify for Rivy clean energy loand ',
      title: 'Rivy solar financing is design for:',
      list: [
        'Business owners seeking to reduce energy costs and enhance reliability',
        'Pomeowners aiming to transition to clean, uninterrupted power',
        'Solar vendors needing inventory financing to meet demand',
      ],
    },
    {
      value: 5,
      header: 'Who qualify for Rivy clean energy loand ',
      title: 'Rivy solar financing is design for:',
      list: [
        'Business owners seeking to reduce energy costs and enhance reliability',
        'Pomeowners aiming to transition to clean, uninterrupted power',
        'Solar vendors needing inventory financing to meet demand',
      ],
    },
  ];
  constructor() {}

  ngOnInit() {}
}
